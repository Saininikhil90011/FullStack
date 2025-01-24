import React from "react";
import PostCard from "./PostCard";

function PopularPosts() {
  const popularPosts = [
    { 
      id: 1,
      title: "Tips on how to travel safely in foreign countries",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      author: "Charlotte Delos",
      role: "Travel Advocate",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    },
    {
      id: 2,
      title: "Enjoying the beach life while on a vacation",
      description: "Lorem ipsum dolor sit amet, consectetur...",
      author: "Adam Cuppy",
      role: "Vlogger",
      image: "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    
    },
  ];

  return (
    <div className="popular-posts">
      <h2>Popular Posts</h2>
      
      <div className="posts">
        {popularPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PopularPosts;
