import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import PopularPosts from "./Components/PopularPosts";
import RecentPosts from "./Components/RecentPosts";
import { Container, Row, Col } from "react-bootstrap";


function App() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <PopularPosts />
        </Col>
        <Col md={4}>
          <RecentPosts />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
