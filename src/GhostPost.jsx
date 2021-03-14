import React, { useState, useEffect } from "react";
import Post from "./Post";

export default function GhostPost(props) {
  const { isVisible } = props;

  const [mouseCoordinate, setMouseCoordinate] = useState({});

  const postStyle = {
    display: isVisible ? "block" : "none",
  };

  const onMouseMove = (e) => {
    setMouseCoordinate({ x: e.pageX, y: e.pageY });
  };

  return (
    <>
      <div className="GhostPostMousePad" onMouseMove={onMouseMove.bind(this)} />
      <div
        className="GhostPost"
        onMouseMove={onMouseMove.bind(this)}
        style={postStyle}
      >
        <Post postData={{ coordinate: mouseCoordinate }} />
      </div>
    </>
  );
}
