import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { filterMovies } from "../services/recommendationService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moviesPath = path.join(__dirname, "..", "data", "movies.json");
const movies = JSON.parse(fs.readFileSync(moviesPath, "utf-8"));

const router = express.Router();

router.get("/movies", (req, res) => {
  const { genre, minRating, maxRuntime, kidFriendly } = req.query;
  const filtered = filterMovies({ genre, minRating, maxRuntime, kidFriendly });
  res.json(filtered);
});

router.get("/movies/:id", (req, res) => {
  const movie = movies.find(m => m.id === req.params.id);
  if (!movie) return res.status(404).json({ error: "Movie not found" });
  res.json(movie);
});

router.get("/recommendations", (req, res) => {
  const { genre, minRating, maxRuntime, kidFriendly } = req.query;
  const recommended = filterMovies({ genre, minRating, maxRuntime, kidFriendly }).slice(0, 10);
  res.json(recommended);
});

export default router;
