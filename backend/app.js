const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const cors = require("cors");

const app = express();

const allowedOrigins = [
  "https://booknest-nickgv.netlify.app",
  "http://localhost:5173",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));

require("dotenv").config();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "Ruta protegida" });
});

module.exports = app;
