import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"

dotenv.config(); 

const app = express();
connectDB();
app.use(express.json());
app.use('/api/auth',authRoute); 

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
