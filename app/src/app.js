import express from "express";
import moviesRouter from "./routes/moviesRoutes.js";

const app = express();

app.use(express.json());
app.use("/", moviesRouter);

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Movie Recommendations</h1>
        <p>Try:</p>
        <ul>
          <li><a href="/movies">/movies</a></li>
          <li><a href="/recommendations?genre=Action&minRating=7">/recommendations?genre=Action&minRating=7</a></li>
        </ul>
      </body>
    </html>
  `);
});

export default app;
