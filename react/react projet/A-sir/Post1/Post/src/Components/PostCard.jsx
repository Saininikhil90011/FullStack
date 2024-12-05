import React from "react";
import { Card } from "react-bootstrap";

const PostCard = ({ image, title, description, author, role }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex align-items-center mt-3">
          <img
            src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80${Math.floor(Math.random() * 70)}`}
            alt={author}
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <strong>{author}</strong>
            <p className="mb-0 text-muted">{role}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
