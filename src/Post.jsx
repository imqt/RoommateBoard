import React, { useState, useEffect } from "react";

export default function Post(props) {
  const { postData } = props;

  const postStyle = {
    left: postData.coordinate.x,
    top: postData.coordinate.y,
  };

  return (
    <div id={postData.id} className="PostContainer" style={postStyle}>
      {postData.content}
    </div>
  );
}
