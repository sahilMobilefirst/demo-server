// index.js
const express = require("express");
const app = express();

// Enable JSON parsing
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

// Example route with parameters
app.get("/hello/:name", (req, res) => {
  res.json({ message: `Hello, ${req.params.name}!` });
});

// Example POST route
app.post("/data", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received",
    data: data,
  });
});

// Vercel requires this for serverless deployment
module.exports = app;

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
