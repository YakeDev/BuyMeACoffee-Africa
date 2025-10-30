export function notFoundHandler(req, res) {
  res.status(404).json({ message: "Resource not found." });
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  const statusCode = err.status ?? err.statusCode ?? 500;
  const isServerError = statusCode >= 500;
  const message =
    !isServerError && err.message ? err.message : "An unexpected error occurred.";

  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  res.status(statusCode).json({ message });
}
