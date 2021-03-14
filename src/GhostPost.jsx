import React, { useState, useEffect } from "react";
import Post from "./Post";

export default function GhostPost(props) {
  const { coordinate, isVisible } = props;

  const postStyle = {
    display: isVisible ? "block" : "none"
  };

  return (
    <div className="GhostPost" style={postStyle}>
      <Post postData={{coordinate: coordinate}} />
    </div>
  );
}
