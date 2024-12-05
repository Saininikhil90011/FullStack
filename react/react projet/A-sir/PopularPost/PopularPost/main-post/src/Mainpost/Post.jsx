import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";

function Post() {
  return (
    <Box sx={{ bgcolor: "white", color: "black", py: 5 }}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5} textAlign="center">
            <img
              src="https://i0.wp.com/blog.ted.com/wp-content/uploads/sites/2/2024/10/TN24_20241024_1GT8585-medium.jpg?resize=649%2C487&ssl=1"
              alt="TEDNext speaker on stage"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Live from TEDNext
            </Typography>
            <Typography variant="h3" component="h1" gutterBottom>
              Grow: Notes from Session 6 of TEDNext 2024
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              By Brian Greene, Maria Ladias, Oliver Friedman, and Renae Reints
              on Oct 24, 2024
            </Typography>
            <Typography variant="body1" paragraph>
              The right idea at the right time can bring people together to
              change the world — but only if minds are open and ready to keep
              learning. For the final session of TEDNext 2024, an extraordinary
              group of speakers and performers showed us how to get ready to
              reach new heights.
            </Typography>
            <Button variant="contained" color="primary">
              Read more
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Post;
