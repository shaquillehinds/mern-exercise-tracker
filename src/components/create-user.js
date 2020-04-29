import React from "react";
import axios from "axios";

export default class CreateUser extends React.Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    console.log(user);
    axios.post(`${process.env.REACT_APP_URL}/users/add`, user).then((response) => {
      console.log(response);
    });
    this.setState({
      username: "",
    });
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  componentDidMount() {
    this.setState({ username: "Shaquille" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create New User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
