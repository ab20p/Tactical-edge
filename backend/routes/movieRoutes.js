import express from "express";
import multer from "multer";
import protect from "../middlewares/authMiddleware.js";

import {
  getMovies,
  createMovie,
  updateMovie,
  getMovieById,
} from "../controllers/movieController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.get("/", protect, getMovies);
router.post("/", protect, upload.single("image"), createMovie);
router.put("/:id", protect, upload.single("image"), updateMovie);
router.get("/:id", protect, getMovieById);

export default router;
