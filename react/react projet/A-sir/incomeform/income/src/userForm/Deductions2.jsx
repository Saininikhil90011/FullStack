import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Section80DForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    policyType: "",
    isSeniorCitizen: null,
    preventiveHealthCheckUp: "",
    medicalExpenditure: "",
    insurancePremium: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle policy type change
  const handlePolicyTypeChange = (event) => {
    setFormData({ ...formData, policyType: event.target.value });
  };

  // Handle toggle button change
  const handleSeniorCitizenChange = (event, newAlignment) => {
    setFormData({ ...formData, isSeniorCitizen: newAlignment });
  };

  // Add/Remove logic
  const handleAddRow = () => {
    console.log("Add row clicked");
  };

  const handleRemoveRow = () => {
    console.log("Remove row clicked");
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
        color: "#0a2342",
        maxWidth: "lg",
        p: 3,
        mt: 2,
        margin: "0 auto",
        mb:4,
      }}
    >
      {/* Header Section */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Section 80D
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ mb: 3, backgroundColor: "#e0f7fa", p: 1, borderRadius: 1 , textAlign: "center" }}
      >
        Note: In case of New Tax Regime, only deduction u/s 80CCD(2) is allowed.
        This is available under Other tab.
      </Typography>

      {/* Form Section */}
      <Grid container spacing={2}>
        {/* Policy Type */}
        <Grid item xs={12} sm={8}>
          <Typography>Medical Insurance</Typography>
          <FormControl fullWidth>
            <Select
              value={formData.policyType}
              onChange={handlePolicyTypeChange}
              name="policyType"
              placeholder="Select Policy Type"
            >
              <MenuItem value="health">Select Policy Type</MenuItem>
              <MenuItem value="life">For Self, Spouse and Dependent children</MenuItem>
              <MenuItem value="general">For Parents</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Senior Citizen Toggle */}
        <Grid item xs={12} sm={4}>
          <Typography>Is any of the policy holder aged 60 years or more</Typography>
          <ToggleButtonGroup
            value={formData.isSeniorCitizen}
            exclusive
            onChange={handleSeniorCitizenChange}
            aria-label="Senior Citizen"
            sx={{ mt: 1 }}
          >
            <ToggleButton value="yes" color="primary">
              Yes
            </ToggleButton>
            <ToggleButton value="no" color="primary">
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>

        {/* Preventive Health Check-Up */}
        <Grid item xs={12} sm={4}>
          <Typography>Preventive Health Check Up</Typography>
          <TextField
            fullWidth
            name="preventiveHealthCheckUp"
            value={formData.preventiveHealthCheckUp}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>

        {/* Medical Expenditure */}
        <Grid item xs={12} sm={4}>
          <Typography>Medical Expenditure</Typography>
          <TextField
            fullWidth
            name="medicalExpenditure"
            value={formData.medicalExpenditure}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>

        {/* Medical Insurance Premium */}
        <Grid item xs={12} sm={4}>
          <Typography>Medical Insurance Premium</Typography>
          <TextField
            fullWidth
            name="insurancePremium"
            value={formData.insurancePremium}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section80DForm;
