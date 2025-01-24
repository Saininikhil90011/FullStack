import React, { useState } from "react";
import { Box, Grid, TextField, Typography, Button, Alert } from "@mui/material";

const TaxSavingsForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    lic: "",
    pf: "",
    ppf: "",
    housingLoan: "",
    fdr: "",
    nsc: "",
    tuitionFees: "",
    annuityPremium: "",
    otherDeductions: "",
  });

  // State for success message
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    console.log("Submitted Data:", formData); // Send this to backend
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
          mb: 4,
      }}
    >
      {/* Header Section */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Section 80C
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ mb: 3, backgroundColor: "#e0f7fa", p: 1, borderRadius: 1, textAlign:"center" }}
      >
        Note: In case of the New Tax Regime, only deduction u/s 80CCD(2) is
        allowed. This is available under the Other tab.
      </Typography>
      <Typography
        variant="h6"
        align="left"
        fontSize={16}
        color="textblack"
        gutterBottom
      >
        Enter your tax saving investment details like PPF investment, Fixed
        Deposits etc.
      </Typography>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Dynamically Generate Fields */}
          {[
            { label: "LIC", name: "lic" },
            { label: "PF", name: "pf" },
            { label: "PPF", name: "ppf" },
            {
              label: "Principal Repayment on Housing Loan",
              name: "housingLoan",
            },
            { label: "FDR (Tax Savings)", name: "fdr" },
            { label: "NSC", name: "nsc" },
            { label: "Tuition Fees", name: "tuitionFees" },
            { label: "Premium Paid to Annuity", name: "annuityPremium" },
            { label: "Other 80C Deductions", name: "otherDeductions" },
          ].map((field) => (
            <Grid item xs={12} sm={4} key={field.name}>
              <TextField
                fullWidth
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                variant="outlined"
                type="text"
              />
            </Grid>
          ))}
        </Grid>
      </form>
    </Box>
  );
};

export default TaxSavingsForm;
