import { Component, useState } from "react";
import "./App.css";
import Board from "./Board";
import AddButton from "./components/AddButton/AddButton";
import Logo from "./Logo";
const logoStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "3px",
  backgroundColor: "white",
  // border: "solid 4px #181010",

  filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2))",
  position: "fixed",
  transition: "0.35s",
  top: "35px",
  left: "30px",
};
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

        <div style={{ position: "absolute" }}>
          <div className={"animate"} style={logoStyle}></div>
        </div>
        <h2 style={{ position: "absolute", left: 80, top: 35, color:"black" }}>colorwall 2.0</h2>
        <AddButton
          onClick={() => this.setState({ selectPostLocationMode: true })}
        ></AddButton>
      </div>
    );
  }
}

export default App;
