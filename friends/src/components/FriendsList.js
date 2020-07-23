import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";



class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const token = window.localStorage.getItem("token");
    // axios
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log("REQUEST:", res);
        this.state.friendsList = res.data;
      })
      .catch(err => console.log("ERROR:", err));
  };

  renderData = () => {
    const renderedData = [];
    console.log("FRIENDS-LIST-STATE:", this.state.friendsList);
    this.state.friendsList.map(friend => renderedData.push(friend));
    return renderedData;
  };

  render() {
    const friendsGroup = this.renderData();
    console.log("fwends-gwoup:", friendsGroup);
    return (
      <div>
        <h1>Friends List</h1>
        <p>
          {friendsGroup.map(friend => (
            <div>
              <h3>{friend.name}</h3>
              <p>{friend.age}</p>
              <p>EMAIL: {friend.email}</p>
            </div>
          ))}
        </p>
      </div>
    );
  }
}

export default FriendsList;