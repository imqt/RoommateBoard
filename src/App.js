import { Component, useState } from "react";
import "./App.css";
import firebase from "./firebase";
import "firebase/database";
import Board from "./Board";
import AddButton from "./components/AddButton/AddButton";
import PostCreator from "./components/PostCreator/PostCreator";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      selectPostLocationMode: false,
      modalShow: false,
    };
  }

  componentDidMount() {
    const cardRoot = firebase.database().ref("posts");

    cardRoot.once("value", (snapshot) => {
      let posts = snapshot.val();
      let newState = [];
      for (let post in posts) {
        newState.push({
          id: post,
        });
      }
      this.setState({
        posts: newState,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Board
          selectPostLocationMode={this.state.selectPostLocationMode}
          showModal={() =>
            this.setState({ selectPostLocationMode: false, modalShow: true })
          }
        />

        <AddButton
          onClick={() => this.setState({ selectPostLocationMode: true })}
        ></AddButton>
        <PostCreator
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          backdrop="static"
          keyboard={false}
        />
        {console.log(this.state.posts)}
        {/* {this.state.dataAvail && <Grid grid={this.state.card} />} */}
      </div>
    );
  }
}

export default App;
