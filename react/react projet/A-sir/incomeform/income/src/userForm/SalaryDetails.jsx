import React from "react";
import { Box, Grid, TextField, MenuItem, Button, Typography, Tooltip, IconButton } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InfoIcon from "@mui/icons-material/Info";

const validationSchema = Yup.object({
  grossSalary: Yup.number().required("Required").min(1, "Must be a positive number"),
  perquisites: Yup.number().min(0, "Cannot be negative"),
  profitInLieu: Yup.number().min(0, "Cannot be negative"),
  exemptHRA: Yup.number().min(0, "Cannot be negative"),
  lta: Yup.number().min(0, "Cannot be negative"),
  gratuity: Yup.number().min(0, "Cannot be negative"),
  employerName: Yup.string().required("Required"),
  tdsDeducted: Yup.number().min(0, "Cannot be negative"),
  tan: Yup.string().matches(/^[A-Z]{4}[0-9]{5}[A-Z]{1}$/, "Invalid TAN format"),
});

const SalaryIncome = () => {
  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        maxWidth: "lg",
        mx: "auto",
        p: 3,
        mt: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Salary Details
      </Typography>
      <Formik
        initialValues={{
          grossSalary: "",
          perquisites: "",
          profitInLieu: "",
          exemptHRA: "",
          lta: "",
          gratuity: "",
          employerName: "",
          tdsDeducted: "",
          tan: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field
                  name="grossSalary"
                  as={TextField}
                  label="Gross Salary / CTC"
                  fullWidth
                  required
                  error={touched.grossSalary && !!errors.grossSalary}
                  helperText={touched.grossSalary && errors.grossSalary}
                  InputProps={{
                    endAdornment: (
                      <Tooltip title="Enter your annual salary or pension income.">
                        <IconButton>
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    ),
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field
                  name="perquisites"
                  as={TextField}
                  label="Value of Perquisites"
                  fullWidth
                  error={touched.perquisites && !!errors.perquisites}
                  helperText={touched.perquisites && errors.perquisites}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field
                  name="profitInLieu"
                  as={TextField}
                  label="Profit in lieu of Salary"
                  fullWidth
                  error={touched.profitInLieu && !!errors.profitInLieu}
                  helperText={touched.profitInLieu && errors.profitInLieu}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field
                  name="exemptHRA"
                  as={TextField}
                  label="Exempt HRA"
                  fullWidth
                  error={touched.exemptHRA && !!errors.exemptHRA}
                  helperText={touched.exemptHRA && errors.exemptHRA}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field
                  name="lta"
                  as={TextField}
                  label="LTA"
                  fullWidth
                  error={touched.lta && !!errors.lta}
                  helperText={touched.lta && errors.lta}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field
                  name="gratuity"
                  as={TextField}
                  label="Gratuity"
                  fullWidth
                  error={touched.gratuity && !!errors.gratuity}
                  helperText={touched.gratuity && errors.gratuity}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field
                  name="employerName"
                  as={TextField}
                  label="Employer Name"
                  fullWidth
                  required
                  error={touched.employerName && !!errors.employerName}
                  helperText={touched.employerName && errors.employerName}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field
                  name="tdsDeducted"
                  as={TextField}
                  label="TDS Deducted"
                  fullWidth
                  error={touched.tdsDeducted && !!errors.tdsDeducted}
                  helperText={touched.tdsDeducted && errors.tdsDeducted}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field
                  name="tan"
                  as={TextField}
                  label="TAN of Employer"
                  fullWidth
                  error={touched.tan && !!errors.tan}
                  helperText={touched.tan && errors.tan}
                />
              </Grid>
            </Grid>
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SalaryIncome;
