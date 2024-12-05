import React from "react";


function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} className="post-image" />
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <div className="author">
        <span>{post.author}</span> - <em>{post.role}</em>
      </div>
    </div>
  );
}

export default PostCard;
