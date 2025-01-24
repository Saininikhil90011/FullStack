import React from 'react';
import { Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import NewsletterSignup from '../components/NewsletterSignup';

const articles = [
  {
    title: "Grow: Notes from Session 6 of TEDNext 2024",
    authors: "Brian Greene, Maria Ladias, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "The right idea at the right time can bring people together to change the world...",
    // image: "/assets/images/image1.jpg",
       image:"public/image/img1.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img2.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img3.jpg"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img4.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img5.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img6.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img7.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img8.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img9.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img10.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img11.webp"
  },
  {
    title: "Play: Notes from Session 5 of TEDNext 2024",
    authors: "Maria Ladias, Brian Greene, Oliver Friedman and Renae Reints",
    date: "Oct 24, 2024",
    description: "Play immerses us in the joy of being alive — and Session 5 of TEDNext 2024 explored...",
       image:"public/image/img12.webp"
  },
  // Add other articles here...
];

const TEDNextPage = () => {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Live from TEDNext
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ArticleCard {...article} />
          </Grid>
        ))}
      </Grid>
      <NewsletterSignup />
    </Layout>
  );
};

export default TEDNextPage;
