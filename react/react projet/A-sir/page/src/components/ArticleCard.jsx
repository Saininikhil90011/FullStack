import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ArticleCard = ({ title, authors, date, description, image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {authors} — {date}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
