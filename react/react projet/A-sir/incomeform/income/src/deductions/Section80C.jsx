import React from "react";
import { TextField, Button, Typography, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// Validation Schema using Yup
const validationSchema = Yup.object({
  ins_lic: Yup.number().required("LIC amount is required").positive("Amount must be positive"),
  invt_pf: Yup.number().required("PF amount is required").positive("Amount must be positive"),
  invt_ppf: Yup.number().required("PPF amount is required").positive("Amount must be positive"),
  home_loan_principal_repayment: Yup.number()
    .required("Principal Repayment on housing loan is required")
    .positive("Amount must be positive"),
  invt_fdr: Yup.number().required("FDR amount is required").positive("Amount must be positive"),
  invt_nsc: Yup.number().required("NSC amount is required").positive("Amount must be positive"),
});

function MyForm() {
  return (
    <Formik
      initialValues={{
        ins_lic: 255500,
        invt_pf: 0,
        invt_ppf: 0,
        home_loan_principal_repayment: 0,
        invt_fdr: 0,
        invt_nsc: 0,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form>
            <Typography variant="h6" gutterBottom>
            Enter your tax saving investment details like PPF investment, Fixed Deposits etc. 
            </Typography>
          <Grid mt={2} container spacing={2}>
            {/* LIC */}
            <Grid item xs={12} sm={6} md={4}>
              <Field
                name="ins_lic"
                as={TextField}
                label="LIC"
                fullWidth
                value={values.ins_lic}
                onChange={handleChange}
                error={touched.ins_lic && !!errors.ins_lic}
                helperText={touched.ins_lic && errors.ins_lic}
                inputProps={{
                  inputMode: "numeric",
                }}
              />
            </Grid>

            {/* PF */}
            <Grid item xs={12} sm={6} md={4}>
              <Field
                name="invt_pf"
                as={TextField}
                label="PF"
                fullWidth
                value={values.invt_pf}
                onChange={handleChange}
                error={touched.invt_pf && !!errors.invt_pf}
                helperText={touched.invt_pf && errors.invt_pf}
                inputProps={{
                  inputMode: "numeric",
                }}
              />
            </Grid>

            {/* PPF */}
            <Grid item xs={12} sm={6} md={4}>
              <Field
                name="invt_ppf"
                as={TextField}
                label="PPF"
                fullWidth
                value={values.invt_ppf}
                onChange={handleChange}
                error={touched.invt_ppf && !!errors.invt_ppf}
                helperText={touched.invt_ppf && errors.invt_ppf}
                inputProps={{
                  inputMode: "numeric",
                }}
              />
            </Grid>

            {/* Principal Repayment on housing Loan */}
            <Grid item xs={12} sm={6} md={4}>
              <Field
                name="home_loan_principal_repayment"
                as={TextField}
                label="Principal Repayment on housing Loan"
                fullWidth
                value={values.home_loan_principal_repayment}
                onChange={handleChange}
                error={touched.home_loan_principal_repayment && !!errors.home_loan_principal_repayment}
                helperText={touched.home_loan_principal_repayment && errors.home_loan_principal_repayment}
                inputProps={{
                  inputMode: "numeric",
                }}
              />
            </Grid>

            {/* FDR (Tax Savings) */}
            <Grid item xs={12} sm={6} md={4}>
              <Field
                name="invt_fdr"
                as={TextField}
                label="FDR (Tax Savings)"
                fullWidth
                value={values.invt_fdr}
                onChange={handleChange}
                error={touched.invt_fdr && !!errors.invt_fdr}
                helperText={touched.invt_fdr && errors.invt_fdr}
                inputProps={{
                  inputMode: "numeric",
                }}
              />
            </Grid>

            {/* NSC */}
            <Grid item xs={12} sm={6} md={4}>
              <Field
                name="invt_nsc"
                as={TextField}
                label="NSC"
                fullWidth
                value={values.invt_nsc}
                onChange={handleChange}
                error={touched.invt_nsc && !!errors.invt_nsc}
                helperText={touched.invt_nsc && errors.invt_nsc}
                inputProps={{
                  inputMode: "numeric",
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
