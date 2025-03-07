const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config()

const corsOptions = {
  origin: "http://127.0.0.1:3001", // Only allow requests from this origin
};

app.use(cors(corsOptions));

// A sample endpoint
app.get("/", (req, res) => {
  res.send("CORS is restricted to http://localhost:3000");
});

app.get("/hi", (req, res) => {
  res.send("hii");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
