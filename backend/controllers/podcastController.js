import Podcast from "../models/Podcast.js";
import Category from "../models/Category.js";
import User from "../models/User.js"; 

export const addPodcast = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    const frontImage = req.files["frontImage"]?.[0]?.path;
    const audioFile = req.files["audioFile"]?.[0]?.path;

    if (!title || !description || !category || !frontImage || !audioFile) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    const { user } = req;

    const cat = await Category.findOne({ category });

    if (!cat) {
      return res.status(400).json({ message: "Please enter a valid category" });
    }

    const uid = user._id;
    const catid = cat._id;
    const newPodcast = new Podcast({
      title,
      description,
      category: catid,
      frontImage,
      audioFile,
      uid,
    });

    await newPodcast.save();
    await Category.findByIdAndUpdate(catid, { $push: { podcasts: newPodcast._id } });
    await User.findByIdAndUpdate(uid, { $push: { podcasts: newPodcast._id } });

    res.status(201).json({ message: "Podcast created successfully", podcast: newPodcast });

  } catch (error) {
    console.error("Add Podcast Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getPodcast = async (req, res) => {
  try {
    const podcasts = await Podcast.find()
      .populate("category") 
      .sort({ createdAt: -1 }); 
    res.status(200).json(podcasts);
  } catch (error) {
    console.error("Get Podcast Error:", error);
    res.status(500).json({ message: "Server error while fetching podcasts" });
  }
}


export const getUserPodcast = async (req, res) => {
  try {
    const { user } = req;
    const uid = user._id;

    const userData = await User.findById(uid)
      .populate({
        path: "podcasts",
        populate: {
          path: "category",
        },
      });

    if (!userData || !userData.podcasts) {
      return res.status(404).json({ message: "No podcasts found for this user" });
    }

    const sortedPodcasts = userData.podcasts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    res.status(200).json(sortedPodcasts);
  } catch (error) {
    console.error("Get User Podcasts Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getPodcastById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Podcast.findById(id).populate("category");

    if (!data) {
      return res.status(404).json({ message: "Podcast not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching podcast:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getPodcastByCategory = async (req, res) => {
  try {
    const { cat } = req.params;

    const category = await Category.findOne({ categoryName: cat }).populate({
      path: "podcasts",
      populate: {
        path: "category",
      },
    });

    if (!category || category.podcasts.length === 0) {
      return res.status(404).json({ message: "No podcasts found for this category" });
    }

    res.status(200).json(category.podcasts);
  } catch (error) {
    console.error("Error fetching podcasts by category:", error);
    res.status(500).json({ message: "Server error" });
  }
};