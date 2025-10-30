import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/authRoutes.js";
import { notFoundHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// 404 handler
app.use(notFoundHandler);

// Prisma disconnect helper
async function disconnectPrisma() {
  await prisma.$disconnect();
}

// Start server function
async function startServer() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    await disconnectPrisma();
    process.exit(1);
  }
}

// Graceful shutdown handlers
process.on('SIGINT', async () => {
  console.log('\nReceived SIGINT, shutting down gracefully...');
  try {
    await disconnectPrisma();
    console.log('Prisma disconnected');
    process.exit(0);
  } catch (error) {
    console.error('Error during shutdown:', error);
    process.exit(1);
  }
});

process.on('SIGTERM', async () => {
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  try {
    await disconnectPrisma();
    console.log('Prisma disconnected');
    process.exit(0);
  } catch (error) {
    console.error('Error during shutdown:', error);
    process.exit(1);
  }
});

// Start the server
startServer();

// Global error handlers
process.on('unhandledRejection', async (reason) => {
  console.error('Unhandled Rejection:', reason);
  try { await disconnectPrisma(); } catch (e) { console.error('Error during Prisma disconnect', e); }
  process.exit(1);
});

process.on('uncaughtException', async (err) => {
  console.error('Uncaught Exception:', err);
  try { await disconnectPrisma(); } catch (e) { console.error('Error during Prisma disconnect', e); }
  process.exit(1);
});
