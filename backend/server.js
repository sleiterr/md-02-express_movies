const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.error("MongoDB connection error", err));

const movieSchema = new mongoose.Schema({}, { strict: false });
const Movie = mongoose.model("Movie", movieSchema, "movies");

//*!========================== GET ================================ */

app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find().limit(20);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ? Search
// Search with pagination
app.get("/movies/search/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const page = parseInt(req.query.page) || 1; 
    const limit = 20;

    const totalMovies = await Movie.countDocuments({
      title: new RegExp(title, "i"),
    });
    const totalPages = Math.ceil(totalMovies / limit);

    const movies = await Movie.find({
      title: new RegExp(title, "i"),
    })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ movies, totalPages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ? Pagination
app.get("/movies/page/:page", async (req, res) => {
  try {
    const page = parseInt(req.params.page) || 1;
    const limit = 20;

    const totalMovies = await Movie.countDocuments({});
    const totalPages = Math.ceil(totalMovies / limit);

    const movies = await Movie.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ movies, totalPages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//*!========================== GET ================================ */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
