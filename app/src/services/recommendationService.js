import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moviesPath = path.join(__dirname, "..", "data", "movies.json");
const movies = JSON.parse(fs.readFileSync(moviesPath, "utf-8"));

export function filterMovies({ genre, minRating, maxRuntime, kidFriendly }) {
  let result = [...movies];

  if (genre) {
    result = result.filter(m => m.genres.includes(genre));
  }

  if (minRating) {
    const r = Number(minRating);
    result = result.filter(m => m.rating >= r);
  }

  if (maxRuntime) {
    const r = Number(maxRuntime);
    result = result.filter(m => m.runtimeMinutes <= r);
  }

  if (kidFriendly === "true") {
    result = result.filter(m => m.isKidFriendly);
  }

  result.sort((a, b) => b.rating - a.rating);
  return result;
}
