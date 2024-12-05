import React from "react";
import { ListGroup, Image } from "react-bootstrap";

const RecentPosts = () => {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=40",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
  ];

  const posts = [
    "Getting the most out of your vacation",
    "Choosing the perfect Safaris in Africa",
    "Hiking during the monsoon in Asia",
    "Must carry items while travelling to Thailand",
    "An extremely funny trip to the Swiss Alps",
  ];

  const authors = [
    "Aaron Patterson",
    "Sam Phipphen",
    "Tony Hawk",
    "Himali Turn",
    "Naomi Watts",
  ];

  return (
    <div>
      <h2 className="mb-4">Recent Posts</h2>
      <ListGroup variant="flush">
        {posts.map((post, index) => (
          <ListGroup.Item key={index} className="d-flex align-items-center">
            <Image
              src={images[index]} 
              alt={`Image for ${post}`}
              rounded
              className="me-3"
              style={{ width: "60px", height: "60px", objectFit: "cover" }} 
            />
            <div>
              <p className="mb-1">{post}</p>
              <small className="text-muted">{authors[index]}</small>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default RecentPosts;

