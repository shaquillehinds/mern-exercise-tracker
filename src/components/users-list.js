import React from "react";
import axios from "axios";

const Users = (props) => {
  return (
    <tr>
      <td>{props.user}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => props.deleteUser(props.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default class UsersList extends React.Component {
  state = {
    users: [],
  };

  deleteUser = async (id) => {
    try {
      const userDeleted = await axios.delete(
        `http://localhost:5000/users/${id}`
      );
      if (userDeleted) {
        console.log(userDeleted.data);
        this.setState((prevState) => {
          const users = prevState.users.filter((user) => !(user._id === id));
          return { users };
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    try {
      const users = await axios.get("http://localhost:5000/users/");
      if (users.data) {
        this.setState({
          users: users.data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h3>Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Users</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <Users
                  key={user._id}
                  id={user._id}
                  user={user.username}
                  deleteUser={this.deleteUser}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
