import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import { getPrisma } from "./lib/prisma.js";

const app = express();

const rawOrigins = process.env.CORS_ORIGIN?.split(",").map((entry) => entry.trim()).filter(Boolean) ?? [];
const corsOptions = rawOrigins.length
  ? { origin: rawOrigins, credentials: true }
  : { origin: true, credentials: true };

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json());

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: Number.parseInt(process.env.RATE_LIMIT_GLOBAL_MAX ?? "300", 10),
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(globalLimiter);

app.get("/health", async (req, res, next) => {
  try {
    await getPrisma().$queryRaw`SELECT 1`;
    res.json({ status: "ok" });
  } catch (error) {
    next(error);
  }
});

const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: Number.parseInt(process.env.RATE_LIMIT_AUTH_MAX ?? "50", 10),
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/auth", authLimiter, authRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
