import * as React from 'react';

import "./BlogStyle.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import "./BlogStyle.css";


const cardData = [
  {
    id: 1,
    title: "Event Tips",
    description: "Finding Amazing Events Near You - Fast, Cheap & Free",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    alt: "green iguana",
  },
  {
    id: 2,
    title: "Reviews",
    description: "The Top Rated Musical Concerts Worldwide in 2019",
    image:
      "https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    alt: "mountains and lake",
  },
  {
    id: 3,
    title: "Discover",
    description: "This female band is making buzz all over the world",
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "delicious meal",
  },
];

function BlogPost() {
  return (
    <div className="pricing-container">
      <h1 className="blog-heading">Popular Blog Posts</h1>
      <p className="blog-description">
        Some amazing blog posts that are written by even more amazing people.
      </p>
      <div className="blog-cards" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {cardData.map((card) => (
          <Card key={card.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={card.image}
                alt={card.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#7c8ba1" , fontSize: "15px" , fontWeight: "500" ,textAlign: "left" }}>
                  {card.title}
                </Typography>
                <Typography  sx={{ color: "#243e63" , fontSize: "18px" , fontWeight: "900" , textAlign: "left"}}>
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" sx={{ color:"#6415ff"}}>
                Read Post
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
