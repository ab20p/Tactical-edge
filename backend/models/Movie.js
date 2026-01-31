import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: String,
    year: Number,
    image: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
