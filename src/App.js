import { Component, useState } from "react";
import "./App.css";
import Board from "./Board";
import AddButton from "./components/AddButton/AddButton";
import Logo from "./Logo";

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

  componentDidMount() {}

  showPostModal() {
    this.setState({ selectPostLocationMode: false, modalShow: true });
  }

  hideModal() {
    this.setState({ modalShow: false });
  }

  render() {
    return (
      <div className="App">
        <Board
          selectPostLocationMode={this.state.selectPostLocationMode}
          isModalOpen={this.state.modalShow}
          showModal={this.showPostModal.bind(this)}
          hideModal={this.hideModal.bind(this)}
        />

        <Logo/>
        
        <hr style={{ position: "absolute", top: 38, left: 100, height: 5}}/>

        <AddButton
          onClick={() => this.setState({ selectPostLocationMode: true })}
        ></AddButton>
      </div>
    );
  }
}

export default App;
