import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema({
  frontPhoto: {
    type: String,
    unique: true,
    required: true,
  },
  audioFile: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    required: true, 
  },
  description: {
    type: String,
    required: true, 
  },
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  user: 
    {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
}, { timestamps: true }); 

const Podcast = mongoose.model("Podcast", podcastSchema);

export default Podcast;
