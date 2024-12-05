import React, { useState } from 'react';
import { Box, TextField, Select, MenuItem, Button, Typography, Grid, FormControl, InputLabel } from '@mui/material';

function DonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    pan: '',
    cashDonation: '',
    otherDonation: '',
    amount: '',
    deductionLimit: '',
    percentage: '',
    pincode: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'white',
        color: '#0a2342',
        maxWidth: '1200px', // Adjust width as per design
        p: 4,
        mt: 2,
        margin: '0 auto', // Centers the form
      }}
    >
       <Typography
        variant="body2"
        color="textSecondary"
        sx={{ mb: 3, backgroundColor: "#e0f7fa", p: 1, borderRadius: 1 , textAlign: "center" }}
      >
        Note: In case of New Tax Regime, only deduction u/s 80CCD(2) is allowed.
        This is available under Other tab.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Section 80G
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3, color: '#6c757d' }}>
        Under section 80G, several donations are eligible for deduction either up to 100% or 50% with or without restriction. Just enter the amount, and we will automatically calculate the maximum refunds for you.
      </Typography>

      <Grid container spacing={3}>
        {/* Name and PAN */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Name of Donee
          </Typography>
          <TextField
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter the donee's name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            PAN of Donee
          </Typography>
          <TextField
            fullWidth
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="Enter PAN"
          />
        </Grid>

        {/* Donation Details */}
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Donation in Cash
          </Typography>
          <TextField
            fullWidth
            name="cashDonation"
            value={formData.cashDonation}
            onChange={handleChange}
            placeholder="Enter cash amount"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Donation in Other Mode
          </Typography>
          <TextField
            fullWidth
            name="otherDonation"
            value={formData.otherDonation}
            onChange={handleChange}
            placeholder="Enter other mode amount"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Donation Amount
          </Typography>
          <TextField
            fullWidth
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter total amount"
          />
        </Grid>

        {/* Select Fields */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Limit of Deduction
          </Typography>
          <FormControl fullWidth>
            <Select
              name="deductionLimit"
              value={formData.deductionLimit}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select limit of deduction
              </MenuItem>
              <MenuItem value="Qualifying Limit">Qualifying Limit</MenuItem>
              <MenuItem value="Without Qualifying Limit">Without Qualifying Limit</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Percentage of Amount
          </Typography>
          <FormControl fullWidth>
            <Select
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select percentage
              </MenuItem>
              <MenuItem value="100%">100%</MenuItem>
              <MenuItem value="50%">50%</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Address Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Pincode
          </Typography>
          <TextField
            fullWidth
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Enter pincode"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Address
          </Typography>
          <TextField
            fullWidth
            name="address"
            value={formData.address}
            onChange={handleChange}
            multiline
            rows={3}
            placeholder="Enter address"
          />
        </Grid>
      </Grid>

      <Box textAlign="right">
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          + Add Donation
        </Button>
      </Box>
    </Box>
  );
}

export default DonationForm;

