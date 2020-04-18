const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
  const newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date),
  });
  newExercise
    .save()
    .then(() => res.json("Exercise Saved"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
