import "dotenv/config";
import app from "./app.js";
import { connectPrisma, disconnectPrisma } from "./lib/prisma.js";

const port = Number.parseInt(process.env.PORT ?? "4000", 10);

async function start() {
  try {
    await connectPrisma();

    const server = app.listen(port, () => {
      console.log(`🚀 API ready on port ${port}`);
    });

    const shutdown = async (signal) => {
      console.log(`Received ${signal}. Closing server...`);
      server.close(async () => {
        await disconnectPrisma();
        console.log("Server closed. Goodbye!");
        process.exit(0);
      });
    };

    process.on("SIGINT", () => {
      void shutdown("SIGINT");
    });
    process.on("SIGTERM", () => {
      void shutdown("SIGTERM");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

start();
