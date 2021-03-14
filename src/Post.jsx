import React, { useState, useEffect } from "react";
import GenderLogo from "./components/GenderLogo/GenderLogo"
import parser from 'html-react-parser';

export default function Post(props) {
  const { postData } = props;

  const postStyle = {
    left: postData.coordinate.x,
    top: postData.coordinate.y,
  };

  return (
    <div id={postData.id} className="PostContainer" style={postStyle}>
      <h2>
        {postData.name}
        <GenderLogo gender={postData.gender} />
      </h2>
      Pet: {postData.has_pet == 0? "No": "Yes"}
      <p>{postData.content}</p>
      {parser(postData.content || "")}
    </div>
  );
}
