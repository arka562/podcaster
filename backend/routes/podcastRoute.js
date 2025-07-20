import express from "express"
import { addPodcast, getPodcast, getPodcastByCategory, getPodcastById, getUserPodcast } from "../controllers/podcastController.js"
import uploads from "../middleware/multer.js"
import protect from "../middleware/authMiddleware.js";
import { getRounds } from "bcryptjs";

const router=express.Router();
router.post('/add-podacst',uploads,protect,addPodcast);
router.get('/get-podcast',getPodcast);
router.get('/get-userpodcast',protect,getUserPodcast);
router.get('/get-podcast/:id',protect,getPodcastById);
router.get('/get-bycategory/:cat',getPodcastByCategory);

export default router;