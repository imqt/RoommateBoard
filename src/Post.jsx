import React, { useState, useEffect } from "react";
import parser from 'html-react-parser';

export default function Post(props) {
  const { postData } = props;

  const postStyle = {
    left: postData.coordinate.x,
    top: postData.coordinate.y,
    backgroundColor: postData.color,
  };

  const getClassName = () => {
    if (postData.background === "paper") {
      return "PostContainer";
    } else if (postData.background === "sticky") {
      return "TODO";
    } else if (postData.background === "scrap") {
      return "TODO";
    } 
  };

  return (
    <div id={postData.id} className={getClassName()} style={postStyle}>
      {parser(postData.content || "")}
    </div>
  );
}
