import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Tooltip,
  IconButton,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Grid from "@mui/material/Grid2"; // Import Grid from @mui/material/Grid2

const questions = [
  {
    id: "q1",
    question: "Income from Salary/Pension?",
    info: "Did you earn any income from Salary or Pension? You can simply upload your From 16 and we shall prepare your ITR automatically or you can fill the details manually like deductions, TDS etc.",
  },
  {
    id: "q2",
    question: "Income from House Property (Home Loan/Rental Income, etc)?",
    info: "Do you own a house & Earn Rent? Fill in detils of your House Property incomes here. Further do you have Home Loan? You can claim deduction on interest of your home loan.",
  },
  {
    id: "q3",
    question: "Income from Business/Profession?",
    info: "Selects if:  (a) You own a small business or (b) You are a contractor or  (c) You earn as Freelancer.",
  },
  {
    id: "q4",
    question: "Income from Capital Gains (Shares/Mutual Funds/Property etc)?",
    info: "Did you sell any Mutual Funds, shares, property, etc? Enter the details of your securities(equity and debentures) and properties. Upload your broker statement and we shall prepare your ITR.",
  },
  {
    id: "q5",
    question: "Income from Other Sources?",
    info: "Selects this if you have any of these incomes-you have received gifts or interst on Fixed deposits or interest from PPF, Dividend Income or income from Mutual Funds ets.",
  },
  {
    id: "q6",
    question: "Income from Foreign Source?",
    info: "Did you receive any income from a foreign source? Then you can opt for our CA Assisted Plans. Our Expert CAs who have years of expertise in foreign taxation and tax treaties ensures that uour return filing is smooth and hassle-free.",
  },
];

const IncomeForm = () => {
  const [formData, setFormData] = useState({});

  const handleRadioChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 ,mt:5 , color: "#333", textAlign: "center", color: "#253243", fontSize:"28px" }}>
    Income Tax Return (ITR) Filing for FY 2023-24 (AY 2024-25)
    </Typography>
    <Typography variant="body2"  sx={{ mb: 2 , textAlign: "center" , color: "#555" }}>
    Tax2win simplifies e-filing your Income Tax Return! Take the first step towards ITR filing.
    Choose your income source and file ITR today!
    </Typography>
    
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          color:"#0a2342",
          maxWidth: "lg",
          p:3,
          mt:2,
          margin: "0 auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {questions.map((item, index) => (
              <React.Fragment key={item.id}>
                <Grid item container xs={12} size={12} alignItems="center">
                  <Grid item xs={6} size={6}>
                    <Typography>
                      <strong>{`Q${index + 1}.`}</strong> {item.question}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={6}
                    size={6}
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={1}
                  >
                    <Grid item>
                      <FormControl>
                        <RadioGroup
                          row
                          value={formData[item.id] || ""}
                          onChange={(e) => handleRadioChange(item.id, e.target.value)}
                        >
                          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Tooltip title={item.info} arrow>
                        <IconButton size="small" >
                          <InfoIcon color="gray" />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} size={12}>
                  <Divider />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default IncomeForm;
