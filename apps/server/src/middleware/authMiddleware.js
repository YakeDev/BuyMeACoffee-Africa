import jwt from "jsonwebtoken";
import { getPrisma } from "../lib/prisma.js";

const prisma = getPrisma();
const JWT_SECRET = process.env.JWT_SECRET;

export async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.toLowerCase().startsWith("bearer ")) {
      return res.status(401).json({ message: "Missing or invalid authorization header." });
    }

    if (!JWT_SECRET) {
      return res.status(500).json({ message: "JWT secret is not configured." });
    }

    const token = authHeader.slice(7);

    const payload = jwt.verify(token, JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: payload.sub ?? 0 },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        githubId: true,
        githubUsername: true,
        githubAvatarUrl: true,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "User associated with token not found." });
    }

    req.user = user;
    return next();
  } catch (error) {
    if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid or expired token." });
    }

    return next(error);
  }
}
