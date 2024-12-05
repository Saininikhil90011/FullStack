import React from "react";
import PostList from "./PostList";

function RecentPosts() {
  const recentPosts = [
    { id: 1, title: "Getting the most out of your vacation", author: "Aaron Patterson", image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" },
    { id: 2, title: "Choosing the perfect Safaris in Africa", author: "Sam Phipphen", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" },
    { id: 3, title: "Hiking during the monsoon in Asia", author: "Tony Hawk", image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" },
    { id: 4, title: "Must carry items while travelling to Thailand", author: "Himali Turn", image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" },
    { id: 5, title: "An extremely funny trip to the Swiss Alps", author: "Naomi Watts", image: "" },
  ];

  return (
    <div className="recent-posts">
      <h2>Recent Posts</h2>
      <PostList posts={recentPosts} />
    </div>
  );
}

export default RecentPosts;
