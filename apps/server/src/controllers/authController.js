import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getPrisma } from "../lib/prisma.js";

const prisma = getPrisma();
const parsedSaltRounds = Number.parseInt(process.env.BCRYPT_SALT_ROUNDS ?? "10", 10);
const SALT_ROUNDS = Number.isNaN(parsedSaltRounds) ? 10 : parsedSaltRounds;
const JWT_SECRET = process.env.JWT_SECRET;

const PUBLIC_USER_SELECT = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
};

function sanitizeUser(user) {
  if (!user) return null;
  const { password: _password, ...rest } = user;
  return rest;
}

export async function registerUser(req, res, next) {
  const { name, email, password } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !password) {
    return res.status(400).json({ message: "Name, email, and password are required." });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: { id: true },
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email is already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
      },
      select: PUBLIC_USER_SELECT,
    });

    return res.status(201).json({ user });
  } catch (error) {
    return next(error);
  }
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body ?? {};

  if (!email?.trim() || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  if (!JWT_SECRET) {
    return res.status(500).json({ message: "JWT secret is not configured." });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        ...PUBLIC_USER_SELECT,
        password: true,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      {
        sub: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "1h" },
    );

    return res.json({ token, user: sanitizeUser(user) });
  } catch (error) {
    return next(error);
  }
}
