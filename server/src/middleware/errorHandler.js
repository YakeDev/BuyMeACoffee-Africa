export function notFoundHandler(req, res) {
  return res.status(404).json({ message: "Resource not found." });
}

// Centralized error handler to prevent leaking internal errors
export function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  const statusCode = err.statusCode ?? 500;
  const message =
    err.message && statusCode < 500
      ? err.message
      : "An unexpected error occurred.";

  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  return res.status(statusCode).json({
    message,
  });
}
