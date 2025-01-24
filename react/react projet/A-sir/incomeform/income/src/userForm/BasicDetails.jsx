import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";

const BasicDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fatherName: "",
    phone: "",
    email: "",
    gender: "",
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, updates: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
    
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          
          maxWidth: "lg",
          p:3,
          mt:2,
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography>First Name</Typography>
              <TextField
                variant="outlined"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography>Middle Name</Typography>
              <TextField
               
                variant="outlined"
                fullWidth
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography>Last Name</Typography>
              <TextField
              
                variant="outlined"
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                
              />
            </Grid>

            <Grid item xs={12} sm={4}>
            <Typography>Father's Name</Typography>
              <TextField
               
                variant="outlined"
                fullWidth
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                
              />
            </Grid>
            <Grid item xs={12} sm={4}>
            <Typography>Mobile Number</Typography>
              <TextField
                
                variant="outlined"
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                
              />
            </Grid>

            <Grid item xs={12} sm={4}>
            <Typography>Email ID</Typography>
              <TextField
                
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
              
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ mb: 1 }} >
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              p: 1.5,
              backgroundColor: "#e6f4ea",
              color: "#2e7d32",
              borderRadius: 1,
              textAlign: "center",
            }}
          >
            Note #: Please enter above mentioned details as mentioned on your PAN Card.
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.updates}
                onChange={handleCheckboxChange}
                name="updates"
              />
            }
            label="I would like to receive updates about my ITR filing on WhatsApp"
            sx={{ mt: 2 }}
          />
        </form>
      </Box>
    </>
  );
};

export default BasicDetails;

