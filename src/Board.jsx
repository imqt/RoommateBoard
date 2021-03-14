import React, { useState, useEffect, useRef } from "react";
import { Form, Spinner } from 'react-bootstrap';
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
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(true);

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


  const onSearchBarChange = (e) => {
    let input = e.target.value.trim().toLowerCase();
    input = input.replace('#','');
    setTag(input);
  };

  const createNewPost = (name, gender, pets, price, location, message, colorSelected, backgroundSelected, tags) => {
    const newPost = {
      name: name,
      gender: gender,
      pets: pets,
      location: location,
      price: price,
      id: uuidv4(),
      coordinate: { x: mouseCoordinate.x, y: mouseCoordinate.y },
      content: message,
      color: colorSelected,
      background: backgroundSelected,
      tags: tags || "",
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
    const posts = initPosts();
    setTimeout(() => {
      setPosts(posts);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className="BoardContainer"
      onClick={onMouseClick}
    >
      {/* Mouse coordinates: {mouseCoordinate.x} {mouseCoordinate.y} */}
      <Form.Control as="textarea" placeholder="Filter by Tags" rows={1} onChange={onSearchBarChange} style={{width: "180px", position: "fixed", top: "30px", right: "250px"}} ></Form.Control>

      {posts.map((post, i) => (
        post.tags && post.tags.includes(tag) && <Post postData={post} />
      ))}
      {loading && <Spinner className="centered" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>}
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
