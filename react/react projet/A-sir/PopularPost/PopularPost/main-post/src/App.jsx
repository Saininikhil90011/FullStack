import { useState } from 'react'
import './App.css'
import Post from './Mainpost/Post'
import 'bootstrap/dist/css/bootstrap.min.css';



import PopularPosts from "./Components/PopularPosts";
import RecentPosts from "./Components/RecentPosts";
import { Container, Row, Col } from "react-bootstrap";
import BlogPost from './New/BlogCard';



function App() {


  return (
    <>
    <Post/>
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
    <BlogPost/>
    </>
  )
}

export default App
