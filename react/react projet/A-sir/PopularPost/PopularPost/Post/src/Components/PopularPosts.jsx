import React from "react";
import PostCard from "./PostCard";
import { Row, Col } from "react-bootstrap";

const PopularPosts = () => {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80~",
      title: "Tips on how to travel safely in foreign countries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Charlotte Delos",
      role: "Travel Advocate",
    },
    {
      image: "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=40",
      title: "Enjoying the beach life while on a vacation",
      description: "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      author: "Adam Cuppy",
      role: "Vlogger",
    },
  ];

  return (
    <div>
      <h2 className="mb-4">Popular Posts</h2>
      <Row>
        {posts.map((post, index) => (
          <Col md={6} key={index}>
            <PostCard {...post} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PopularPosts;
