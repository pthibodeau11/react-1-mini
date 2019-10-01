import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: [],
      name: ""
    };
  }

  updatePicture(value) {
    this.setState({ picture: value });
  }

  updateName(value) {
    this.setState({ name: value });
  }

  addFriend() {
    const { friends, picture, name } = this.state; // what purpose does this serve...??

    let newFriends = friends.slice(); //this makes a copy
    newFriends.push({ picture, name }); //this adds the new friend to the array

    this.setState({ friends: newFriends, picture: "", name: "" }); //add a new friend object to the friends array on state & clear values of picture/name on state
  }

  render() {
    const friends = this.state.friends.map((friend, index) => (
      <div key={`friend-${index}-${friend.name}`}>
        <img width="100px" src={friend.picture} />
        <span>{friend.name}</span>
      </div>
    ));

    return (
      <div>
        <span>Picture:</span>
        <input
          onChange={event => this.updatePicture(event.target.value)}
          value={this.state.picture}
        ></input>
        <span>Name:</span>
        <input
          onChange={event => this.updateName(event.target.value)}
          value={this.state.name}
        ></input>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
