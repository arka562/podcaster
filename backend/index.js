import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"
import categoryRoute from "./routes/categoryRoute.js"
import podcastRoute from "./routes/podcastRoute.js"

dotenv.config(); 

const app = express();
connectDB();
app.use(express.json());
app.use('/api/auth',authRoute); 
app.use('/api/category',categoryRoute);
app.use('/api/podcast',podcastRoute);

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
