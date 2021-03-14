import React, { useState, useEffect, useRef } from "react";
import PostCreator from "./components/PostCreator/PostCreator";
import Post from "./Post";
import GhostPost from "./GhostPost";
import { uuidv4 } from "./util";
import firebase from "./firebase";
import "firebase/database";

const initPosts = () => {
  let posts = [];
  const postsRoot = firebase.database().ref("posts");
  postsRoot.once("value", (snapshot) => {
    let allPosts = snapshot.val();
    console.log("Firebase pull: allPosts");
    console.log(allPosts);
    for (let post in allPosts) {
      posts.push(allPosts[post]);
    }
  });
  return posts;
};

export default function Board(props) {
  const { selectPostLocationMode, isModalOpen, showModal, hideModal } = props;

  const [posts, setPosts] = useState([]);
  const [mouseCoordinate, setMouseCoordinate] = useState({x: 0, y: 0});

  // const lastClickedCoordinate = {x: 0, y: 0};

  const onMouseClick = (e) => {
    if (!isModalOpen) {
      console.log(e.clientX);
      console.log(e.clientY);
      setMouseCoordinate({x: e.clientX, y: e.clientY});
    }
    if (selectPostLocationMode) {
      showModal();
    }
  };

  const createNewPost = (name, gender, pets, price, location, message) => {
    console.log(name);
    console.log(gender);
    const newPost = {
      name: name,
      gender: gender,
      pets: pets,
      location: location,
      price: price,
      id: uuidv4(),
      coordinate: { x: mouseCoordinate.x, y: mouseCoordinate.y },
      content: message,
    };
    const postsRoot = firebase.database().ref('posts');
    postsRoot.once('value', () => {
        const postRootNum = postsRoot.child(newPost.id);
        postRootNum.update(newPost);
    });
    console.log(posts);
    setPosts([...posts, newPost]);
    hideModal();
  };

  useEffect(() => {
    setPosts(initPosts());
  }, []);

  return (
    <div
      className="BoardContainer"
      onClick={onMouseClick}
    >
      Mouse coordinates: {mouseCoordinate.x} {mouseCoordinate.y}
      {posts.map((post, i) => (
        <Post postData={post} />
      ))}
      <PostCreator
        show={isModalOpen}
        onHide={hideModal}
        backdrop="static"
        keyboard={false}
        onSubmitClick={createNewPost}
      />
      <GhostPost mouseCoordinate={mouseCoordinate} isVisible={selectPostLocationMode} />
    </div>
  );
}
