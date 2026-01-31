import Movie from "../models/Movie.js";

export const getMovies = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 8;

  const movies = await Movie.find({ user: req.user })
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Movie.countDocuments({ user: req.user });

  res.json({
    movies,
    totalPages: Math.ceil(total / limit),
  });
};

export const createMovie = async (req, res) => {
  const movie = await Movie.create({
    title: req.body.title,
    year: req.body.year,
    image: req.file?.path,
    user: req.user,
  });

  res.json(movie);
};

export const updateMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  movie.title = req.body.title;
  movie.year = req.body.year;
  if (req.file) movie.image = req.file.path;

  await movie.save();

  res.json(movie);
};

export const getMovieById = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
};
