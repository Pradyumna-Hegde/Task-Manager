const notFound = (req, res) =>
  res.status(404).send("status: 404, Page not found");

export default notFound;
