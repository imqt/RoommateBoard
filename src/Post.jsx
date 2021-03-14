import React, { useState, useEffect } from "react";
import parser from 'html-react-parser';

export default function Post(props) {
  const { postData } = props;

  const postStyle = {
    left: postData.coordinate.x,
    top: postData.coordinate.y,
  };


  return (
    <div id={postData.id} className="PostContainer" style={postStyle}>
      <div className="InnerPostContainer">
        {parser(postData.content || "")}
      </div>
    </div>
  );
}
