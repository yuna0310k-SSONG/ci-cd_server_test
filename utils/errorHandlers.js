export const handleValidationError = (error, res) => {
  res.status(400).json({ error: error.details[0].message });
};

export const handleNotFoundError = (res, message = "Resource not found") => {
  res.status(404).json({ error: message });
};
