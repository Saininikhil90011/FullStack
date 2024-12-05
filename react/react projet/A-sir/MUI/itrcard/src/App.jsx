import React from 'react';
import { Box, Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';

function TaxFilingCards() {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* Card 1: Self-ITR Filing */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                File ITR Yourself – Fast & Easy
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
                Complete your income tax filing in just 4 minutes! Our intuitive platform makes the process seamless. Plans start at just ₹49.
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                ✔ Quick and simple  
                <br />
                ✔ Affordable pricing  
                <br />
                ✔ Trusted by millions
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth>
                Start Filing Now
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 2: Hire an eCA */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Get Professional Help – Hire an eCA
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>
                Let a personal eCA handle your ITR filing with ease. We ensure maximum refund and a stress-free experience!
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                ✔ Expert assistance  
                <br />
                ✔ Maximum refund guaranteed  
                <br />
                ✔ Time-saving and reliable
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth>
                Hire an eCA
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TaxFilingCards;