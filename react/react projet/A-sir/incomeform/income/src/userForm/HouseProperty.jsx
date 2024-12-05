import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as Yup from "yup";

const HouseProperty = () => {
  const [formIndex, setFormIndex] = useState(0);

  const formik = useFormik({
    initialValues: {
      hp_type: "S",
      pincode: "",
      city: "",
      statecode: "",
      address: "",
      loan: "0",
      interest_on_loan_purchase: "",
      interest_on_loan_repair: "",
      interest_preconstruction: "",
      property_tax: "",
    },
    validationSchema: Yup.object({
      pincode: Yup.string()
        .required("Pincode is required")
        .length(6, "Pincode must be 6 digits"),
      city: Yup.string().required("City is required"),
      statecode: Yup.string().required("State is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleAddHouseProperty = () => {
    setFormIndex(formIndex + 1);
  };

  return (
    <Box
      sx={{
        mt: 5,
        boxShadow: 3,
        borderRadius: 2,
        maxWidth: "lg",
        mx: "auto",
        p: 4,
        backgroundColor: "#fff",
        mb: 4,
      }}
    >
      {[...Array(formIndex + 1)].map((_, index) => (
        <form key={index} onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            {/* Type of House Property */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#f5f5f5",
                  p: 2,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: "#333" }}>
                  Type of House Property
                </Typography>
                <FormControl sx={{ minWidth: 200 }}>
                  <Select
                    name="hp_type"
                    value={formik.values.hp_type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    displayEmpty
                    sx={{ backgroundColor: "#fff", color: "#333" }}
                  >
                    <MenuItem value="S">Self Occupied</MenuItem>
                    <MenuItem value="L">Let Out</MenuItem>
                    <MenuItem value="D">Deemed Let Out</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            {/* Pincode and Address */}
            <Grid item xs={12} md={4}>
              <Typography>Pincode</Typography>
              <TextField
                name="pincode"
                value={formik.values.pincode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                helperText={formik.touched.pincode && formik.errors.pincode}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography>Address</Typography>
              <TextField
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                fullWidth
              />
            </Grid>

            {/* Loan Question */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">
                  Have you taken any loan to buy the Property?
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    onClick={() => formik.setFieldValue("loan", "1")}
                    sx={{ mr: 2 }}
                  >
                    Yes
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => formik.setFieldValue("loan", "0")}
                  >
                    No
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Loan Details */}
            {formik.values.loan === "1" && (
              <>
                <Grid item xs={12} md={4}>
                  <Typography>
                    Interest on Loan for purchase of house property
                  </Typography>
                  <TextField
                    name="interest_on_loan_purchase"
                    value={formik.values.interest_on_loan_purchase}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography>
                    Interest on Loan for repair/renewal or reconstruction
                  </Typography>
                  <TextField
                    name="interest_on_loan_repair"
                    value={formik.values.interest_on_loan_repair}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography>Pre Construction Period Interest</Typography>
                  <TextField
                    name="interest_preconstruction"
                    value={formik.values.interest_preconstruction}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                </Grid>
              </>
            )}

            {/* Property Tax */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">Property tax paid</Typography>
                <Box>
                  <Button
                    variant="contained"
                    onClick={() => formik.setFieldValue("property_tax", "1")}
                    sx={{ mr: 2 }}
                  >
                    Yes
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => formik.setFieldValue("property_tax", "0")}
                  >
                    No
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Conditional Property Tax Input */}
            {formik.values.property_tax === "1" && (
              <Grid item xs={12}>
                <Typography>
                  Property Tax/ Municipal Tax Paid By Owner
                </Typography>
                <TextField
                  name="property_tax_amount"
                  value={formik.values.property_tax}
                  onChange={formik.handleChange}
                  fullWidth
                />
              </Grid>
            )}
          </Grid>

          {/* Add Another Property */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleAddHouseProperty}
            >
              + Add Another Property
            </Button>
          </Box>
        </form>
      ))}
    </Box>
  );
};

export default HouseProperty;
