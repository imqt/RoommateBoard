import React, { useState } from "react";

export default function GhostPost(props) {
  const { isVisible } = props;

  const [mouseCoordinate, setMouseCoordinate] = useState({});

  const postStyle = {
    left: mouseCoordinate.x,
    top: mouseCoordinate.y,
    display: isVisible ? "block" : "none",
  };

  const onMouseMove = (e) => {
    setMouseCoordinate({ x: e.pageX - 10, y: e.pageY - 10 });
  };

  return (
    <>
      <div className="GhostPostMousePad" onMouseMove={onMouseMove.bind(this)} />
      <div
        className="GhostPost PostContainer"
        onMouseMove={onMouseMove.bind(this)}
        style={postStyle}
      />
    </>
  );
}
