import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Import cors
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import podcastRoute from "./routes/podcastRoute.js";

dotenv.config();

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Use JSON parser
app.use(express.json());

// ✅ Configure and use CORS
app.use(
  cors({
    origin: "*", // You can specify exact origin like "http://localhost:3000"
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

// ✅ API Routes
app.use("/api/auth", authRoute);
app.use("/api/category", categoryRoute);
app.use("/api/podcast", podcastRoute);

// ✅ Start server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
