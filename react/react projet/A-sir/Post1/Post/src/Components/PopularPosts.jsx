import React from "react";
import PostCard from "./PostCard";
import { Row, Col } from "react-bootstrap";
import "./post.css";

const PopularPosts = () => {
  const posts = [
    {
      image: "/img/village1.avif",
      title: "Tips on how to travel safely in foreign countries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Charlotte Delos",
      role: "Travel Advocate",
    },
    {
      image: "/img/img2.jpg",
      title: "Enjoying the beach life while on a vacation countries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      author: "Adam Cuppy",
      role: "Vlogger",
    },
  ];

  return (
    <div className="populor">
      <h2 className="mb-4 ">Popular Posts</h2>
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
