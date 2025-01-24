import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  IconButton,
  Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const businessNatureOptions = [
  { label: "Goods Carriage (Section 44AE)", value: "9999" },
  { label: "Legal profession", value: "16001" },
  { label: "Accounting, book-keeping & auditing profession", value: "16002" },
  { label: "Tax consultancy", value: "16003" },
  { label: "Architectural profession", value: "16004" },
  { label: "Engineering & technical consultancy", value: "16005" },
  { label: "Fashion designing", value: "16007" },
  // Add additional options as needed...
];

const validationSchema = Yup.object({
  businessNature: Yup.string().required("Required"),
  businessName: Yup.string().required("Required"),
  grossTurnoverBank: Yup.number().required("Required").min(0, "Cannot be negative"),
  grossTurnoverCash: Yup.number().required("Required").min(0, "Cannot be negative"),
  totalPresumptiveIncome: Yup.number().required("Required").min(0, "Cannot be negative"),
});

const PresumptiveIncome = () => {
  const [forms, setForms] = useState([{ id: 1 }]);

  const addForm = () => {
    setForms([...forms, { id: forms.length + 1 }]);
  };

  const deleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  

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
      {forms.map((form, index) => (
        <Box key={form.id} sx={{ mb: 4, position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tooltip title={`Form No. ${index + 1}`}>
                <IconButton
                  sx={{
                    mr: 1,
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                  }}
                >
                  {index + 1}
                </IconButton>
              </Tooltip>
              Presumptive Business Income
            </Typography>
            {forms.length > 1 && (
              <Tooltip title="Delete Form">
                <IconButton
                  color="error"
                  onClick={() => deleteForm(form.id)}
                  sx={{ ml: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
          <Formik
            initialValues={{
              businessNature: "",
              businessName: "",
              grossTurnoverBank: "",
              grossTurnoverCash: "",
              totalPresumptiveIncome: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(`Form ${form.id}:`, values)}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={3}>
                  {/* First Row */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="body1" gutterBottom>
                      Nature of Business
                    </Typography>
                    <Field
                      name="businessNature"
                      as={TextField}
                      select
                      fullWidth
                      required
                      error={touched.businessNature && !!errors.businessNature}
                      helperText={touched.businessNature && errors.businessNature}
                    >
                      <MenuItem value="">Please Select</MenuItem>
                      {businessNatureOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="body1" gutterBottom>
                      Business Name
                    </Typography>
                    <Field
                      name="businessName"
                      as={TextField}
                      fullWidth
                      required
                      error={touched.businessName && !!errors.businessName}
                      helperText={touched.businessName && errors.businessName}
                    />
                  </Grid>
                  {/* Second Row */}
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="body1" gutterBottom>
                      Gross Turnover through Bank
                    </Typography>
                    <Field
                      name="grossTurnoverBank"
                      as={TextField}
                      fullWidth
                      required
                      error={
                        touched.grossTurnoverBank && !!errors.grossTurnoverBank
                      }
                      helperText={
                        touched.grossTurnoverBank && errors.grossTurnoverBank
                      }
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="body1" gutterBottom>
                      Gross Turnover through Cash
                    </Typography>
                    <Field
                      name="grossTurnoverCash"
                      as={TextField}
                      fullWidth
                      required
                      error={
                        touched.grossTurnoverCash && !!errors.grossTurnoverCash
                      }
                      helperText={
                        touched.grossTurnoverCash && errors.grossTurnoverCash
                      }
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="body1" gutterBottom>
                      Total Presumptive Income
                    </Typography>
                    <Field
                      name="totalPresumptiveIncome"
                      as={TextField}
                      fullWidth
                      error={
                        touched.totalPresumptiveIncome &&
                        !!errors.totalPresumptiveIncome
                      }
                      helperText={
                        touched.totalPresumptiveIncome &&
                        errors.totalPresumptiveIncome
                      }
                    />
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      ))}
      <Box display="flex" justifyContent="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={addForm}
        >
          Add Presumptive Income
        </Button>
      </Box>
    </Box>
  );
};

export default PresumptiveIncome;
