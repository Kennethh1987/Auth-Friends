  
import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriends extends React.Component {
  state = {
    info: {
      id: "",
      name: "",
      age: "",
      email: ""
    },
    friendsList: []
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .post("api/friends", data)
      .then(res => {
        console.log(res.data);
        this.state.friendsList = res.data;
      })
      .catch(err => console.log("ERROR, ERROR ", err));
  };

  idChange = e => {
    this.setState({
      id: e.target.value,
      name: e.target.value,
      age: e.target.value,
       email: e.target.value
    });
  };


  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="id"
            value={this.state.id}
            onChange={this.idChange}
            placeholder="id"
          />
          <input
            name="name"
            value={this.state.name}
            onChange={this.idChange}
            placeholder="name"
          />
          <input
            name="age"
            value={this.state.age}
            onChange={this.idChange}
            placeholder="age"
          />
          <input
            name="email"
            value={this.state.email}
            onChange={this.idChange}
            placeholder="email"
          />
          <button type="submit">Add New</button>
        </form>
        <div>
          {this.state.friendsList.map(friend => (
            <div>
              <h3>{friend.name}</h3>
              <p>{friend.age}</p>
              <p>EMAIL: {friend.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AddFriends;