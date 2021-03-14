import { Component, useState } from "react";
import "./App.css";
import firebase from "./firebase";
import "firebase/database";
import Board from "./Board";
import AddButton from "./components/AddButton/AddButton";
import ProfileButton from "./components/ProfileButton/ProfileButton";
import PostCreator from './components/PostCreator/PostCreator';
import ProfileCreator from './components/ProfileCreator/ProfileCreator';
import Logo from './Logo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      selectPostLocationMode: false,
      modalShow: false,
      modalShowProfile: false,
    };
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
        <ProfileButton onClick={() => this.setState({ modalShowProfile: true })}></ProfileButton>
        <ProfileCreator
          show={this.state.modalShowProfile}
          onHide={() => this.setState({ modalShowProfile: false })}
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
