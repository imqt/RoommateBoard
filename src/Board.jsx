import React, { useState, useEffect } from "react";
import Post from "./Post";
import GhostPost from "./GhostPost";
import { uuidv4 } from "./util";

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
  const { selectPostLocationMode, showModal } = props;

  const [mouseCoordinate, setMouseCoordinate] = useState({});
  const [posts, setPosts] = useState(placeHolderPosts);

  const onMouseMove = (e) => {
    setMouseCoordinate({ x: e.pageX, y: e.pageY });
  };

  const onMouseClick = () => {
    if (selectPostLocationMode) {
      showModal();
    }
    // setPosts([...posts, createNewPost()]);
  };

  const createNewPost = () => {
    return {
      id: uuidv4(),
      coordinate: { x: mouseCoordinate.x, y: mouseCoordinate.y },
      content: "post new",
    };
  };

  useEffect(() => {}, []);

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
      <GhostPost
        coordinate={mouseCoordinate}
        isVisible={selectPostLocationMode}
      />
    </div>
  );
}
