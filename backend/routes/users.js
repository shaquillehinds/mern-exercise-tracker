const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete(async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.send(deletedUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
