import React, { useState, useEffect } from "react";
import GenderLogo from "./components/GenderLogo/GenderLogo"
import parser from 'html-react-parser';

export default function Post(props) {
  const { postData } = props;

  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');


  useEffect(() => {
    setHeight(350 + Math.random()*69);
    setWidth(250 + Math.random()*69);
  }, [])

  const postStyle = {
    left: postData.coordinate.x,
    top: postData.coordinate.y,
    height: height,
    width: width,
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
      <div id={postData.id} className={`${fullView ? `PostContainerFull ${getColorClassName()+"Full"}` : `PostContainer  ${getColorClassName()}`}`} style={fullView ? null : postStyle}>
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
    </div>
  );
}
