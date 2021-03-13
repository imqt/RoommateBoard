import React, { useState, useEffect } from "react";
import Post from "./Post";

const placeHolderPosts = [
  {
    id: 1,
    coordinate: {
      x: 240,
      y: 240,
    },
    content: "post 1",
  },
  {
    id: 2,
    coordinate: {
      x: 432,
      y: 854,
    },
    content: "post 2",
  },
  {
    id: 3,
    coordinate: {
      x: 562,
      y: 12,
    },
    content: "post 3",
  },
];

export default function Board(props) {
  const [mouseCoordinate, setMouseCoordinate] = useState({});
  const [posts, setPosts] = useState(placeHolderPosts);

  const onMouseMove = (e) => {
    setMouseCoordinate({ x: e.pageX, y: e.pageY });
  };

  const onMouseClick = () => {
    console.log(createNewPost());
    setPosts([...posts, createNewPost()]);
  };

  const createNewPost = () => {
    return {
      id: uuidv4(),
      coordinate: {x: mouseCoordinate.x, y: mouseCoordinate.y},
      content: "post new",
    };
  };

  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  useEffect(() => {
    // document.getElementById('scrollableDiv').addEventListener('scroll', toggleFilterCollapse, {passive: true});
    // return () => {
    //   document.getElementById('scrollableDiv').removeEventListener('scroll', toggleFilterCollapse)
    // }
  }, []);

  return (
    <div
      className="BoardContainer"
      onMouseMove={onMouseMove.bind(this)}
      onClick={onMouseClick}
    >
      Mouse coordinates: {mouseCoordinate.x} {mouseCoordinate.y}
      {posts.map((post, i) => (
        <Post postData={post} />
      ))}
    </div>
  );
}
