import React, { useState } from "react";
import GenderLogo from "./components/GenderLogo/GenderLogo"
import parser from 'html-react-parser';

export default function Post(props) {
  const { postData } = props;

  const postStyle = {
    left: postData.coordinate.x,
    top: postData.coordinate.y,
    // backgroundColor: postData.color,
  };

  const getClassName = () => {
    if (postData.background === "paper") {
      return "PostContainer";
    } else if (postData.background === "sticky") {
      return "PostContainer";
    } else if (postData.background === "scrap") {
      return "PostContainer";
    } 
  };

  const [fullView, setFullView] = useState(false);


  const getColorClassName = () => {
    return postData.color + "Post";
  };

  return (
    <div className={`${fullView ? `fullInvisibleWrapper` : ""}`} onClick={() => {setFullView(!fullView)}}>
      <div id={postData.id} className={`${fullView ? `PostContainerFull ${getColorClassName()+"Full"}` : `PostContainer  ${getColorClassName()}`}`} style={postStyle}>
        <div className="InnerPostContainer">
          <h3>
            {postData.name}
            <GenderLogo gender={postData.gender} />
          </h3>
          Pets: {postData.pets === 0? "No": "Yes"}
          {parser(postData.content || "")}
        </div>
      </div>
    </div>
  );
}
