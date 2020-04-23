import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateExercise extends React.Component {
  state = {
    username: "Anon",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };
  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((response) => console.log(response));

    window.location = "/";
  };

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((res) => {
      const data = res.data;
      if (data.length > 0) {
        this.setState({
          users: data.map((user) => user.username),
          username: data[0].username,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              type="text"
              value={this.state.description}
              required
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (In Minutes) </label>
            <input
              type="text"
              required
              onChange={this.onChangeDuration}
              value={this.state.duration}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
