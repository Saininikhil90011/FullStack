import React from "react";


function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <img src={post.image} alt={post.title} className="post-thumbnail" />
          <div>
            <h4>{post.title}</h4>
            <p>{post.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
