import React, { useState, useEffect } from "react";
import Axios from "axios";

function Post() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = data;
    setPosts(posts);
    console.log(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
          <>
        <p key={post.id}>{post.id}</p>
        <p key={post.id}>{post.title}</p>
        </>
      ))}
    </div>
  );
}

export default Post;
