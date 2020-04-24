import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link className="btn btn-primary" to={`/edit/${props.exercise._id}`}>
          Edit
        </Link>{" "}
        <button
          className="btn btn-danger"
          onClick={() => props.deleteExercise(props.exercise._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default class ExercisesList extends React.Component {
  state = {
    exercises: [],
  };
  deleteExercise = (id) => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => console.log(res));
    this.setState({
      exercises: this.state.exercises.filter((exercise) => exercise._id !== id),
    });
  };
  exerciseList = () => {
    const exercises = this.state.exercises;
    if (exercises.length > 0) {
      return exercises.map((exercise) => {
        return (
          <Exercise
            exercise={exercise}
            deleteExercise={this.deleteExercise}
            key={exercise._id}
          />
        );
      });
    }
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => {
        const data = res.data;
        if (data.length > 0) {
          this.setState({
            exercises: data,
          });
        }
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
