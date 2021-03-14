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
      <div className="InnerPostContainer">
        <h3>
          {postData.name}
          <GenderLogo gender={postData.gender} />
        </h3>
        <p>Location: {postData.location}</p>
        <p>Pets: {postData.pets == 0? "No": "Yes"}</p>
        {parser(postData.content || "")}
        </div>
    </div>
  );
}
