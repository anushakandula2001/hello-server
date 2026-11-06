
import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/", async () => {
  return {
    message: "Hello Storzey!",
    status: "Server is running",
  };
});

const start = async () => {
  try {
    await app.listen({
      port: 3000,
      host: "127.0.0.1",
    });

    console.log("Server running at http://localhost:3000");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
