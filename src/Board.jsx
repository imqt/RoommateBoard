import React, { useState, useEffect } from "react";
import Post from "./Post";
import GhostPost from "./GhostPost";
import { uuidv4 } from "./util"
import firebase from "./firebase";
import "firebase/database";
import { all } from "q";

const initPosts = () => {
  let posts = []
  const postsRoot = firebase.database().ref('posts');
  postsRoot.once('value', (snapshot) => {
    let allPosts = snapshot.val();
    console.log(allPosts);
    for (let post in allPosts) {
      posts.push(allPosts[post]);
    }
  });
  return posts; 
}


export default function Board(props) {
  const { selectPostLocationMode, showModal } = props;

  const [mouseCoordinate, setMouseCoordinate] = useState({});
  const [posts, setPosts] = useState(initPosts());


  const onMouseMove = (e) => {
    setMouseCoordinate({ x: e.pageX, y: e.pageY });
  };

  const onMouseClick = () => {
    if (selectPostLocationMode) {
      showModal();
    }

    // console.log(createNewPost());
    // let newPost = createNewPost();
    // const postsRoot = firebase.database().ref('posts');
    // postsRoot.once('value', () => {
    //     const postRootNum = postsRoot.child(newPost.id);
    //     postRootNum.update(newPost);
    // });
    // setPosts([...posts, newPost]);
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
