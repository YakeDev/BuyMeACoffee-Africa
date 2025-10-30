import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

const SALT_ROUNDS = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS || "10", 10);
const JWT_SECRET = process.env.JWT_SECRET;

export async function registerUser(req, res, next) {
  const { name, email, password } = req.body ?? {};

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Name, email, and password are required to register.",
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email is already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return res.status(201).json({ user });
  } catch (error) {
    return next(error);
  }
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  if (!JWT_SECRET) {
    return res.status(500).json({ message: "JWT secret is not configured." });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect email or password." });
    }

    const token = jwt.sign(
      { sub: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    return res.json({ token });
  } catch (error) {
    return next(error);
  }
}
