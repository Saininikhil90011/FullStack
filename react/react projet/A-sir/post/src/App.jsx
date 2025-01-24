import React from "react";
import PopularPosts from "./components/PopularPosts";
import RecentPosts from "./components/RecentPosts";
import "./App.css"; // Add styles here or use TailwindCSS for convenience
import PostCard from "./components/PostCard";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="app">
  
      <div className="posts-container">

        <PopularPosts />
        <RecentPosts />
        {/* <PostCard/>
        <PostList/> */}
      </div>
    </div>
  );
}

export default App;
