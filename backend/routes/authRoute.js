import express from "express";
import { signup, login, getUser } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/sign-up', signup);
router.post('/login', login);
router.get('/get-user',protect,getUser);

export default router;
