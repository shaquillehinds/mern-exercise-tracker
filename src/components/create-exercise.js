import React from "react";

export default class CreateExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      data: new Date(),
      users: [],
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.data}</p>
      </div>
    );
  }
}
