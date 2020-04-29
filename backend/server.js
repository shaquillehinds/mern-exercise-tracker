const express = require("express"),
  mongoose = require("mongoose"),
  path = require("path"),
  cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

const index = path.join(__dirname, "../build/");

app.use(express.static(index));

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => console.log(`Server is running on port ${port}...`));
