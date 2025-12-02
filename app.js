import express from "express";
import cors from "cors";
import dogsRoutes from "./routes/dogsRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/dogs", dogsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("안녕하세요 ~~서버 입니다");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
