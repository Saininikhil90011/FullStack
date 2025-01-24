import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  IconButton,
  Grid,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

function TaxForm() {
  const [formData, setFormData] = useState({
    disabledMember: "",
    diseasedCitizen: "",
    totalExpenditure: "",
    educationLoan: "",
    rentPaid: "",
    rentMonths: "",
  });

  const [otherDetails, setOtherDetails] = useState([
    { description: "", amount: "" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOtherDetailsChange = (index, key, value) => {
    const updatedDetails = [...otherDetails];
    updatedDetails[index][key] = value;
    setOtherDetails(updatedDetails);
  };

  const addOtherDetail = () => {
    setOtherDetails([...otherDetails, { description: "", amount: "" }]);
  };

  const removeOtherDetail = (index) => {
    const updatedDetails = [...otherDetails];
    updatedDetails.splice(index, 1);
    setOtherDetails(updatedDetails);
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
        maxWidth: "1200px",
        p: 4,
        mt: 3,
        mx: "auto",
      }}
    >
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          mb: 3,
          backgroundColor: "#e0f7fa",
          p: 1,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        Note: In case of New Tax Regime, only deduction u/s 80CCD(2) is allowed.
        This is available under Other tab.
      </Typography>

      {/* Section: Other Details */}
      <Box sx={{ boxShadow: 2, p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Other Details
        </Typography>
        {otherDetails.map((detail, index) => (
          <Grid container spacing={3} key={index}>
            <Grid item xs={12} sm={6}>
              <Typography>Specify if any other</Typography>
              <FormControl fullWidth>
                <Select
                  value={detail.description}
                  onChange={(e) =>
                    handleOtherDetailsChange(index, "description", e.target.value)
                  }
                >
                  <MenuItem value="80CCC">80CCC</MenuItem>
                  <MenuItem value="80CCH">80CCH</MenuItem>
                  <MenuItem value="80CCD(1)">80CCD(1)</MenuItem>
                  <MenuItem value="80CCD(1B)">80CCD(1B)</MenuItem>
                  <MenuItem value="80CCD(2)">80CCD(2)</MenuItem>
                  <MenuItem value="80EE">80EE</MenuItem>
                  <MenuItem value="80EEA">80EEA</MenuItem>
                  <MenuItem value="80EEB">80EEB</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Amount</Typography>
              <TextField
                fullWidth
                value={detail.amount}
                onChange={(e) =>
                  handleOtherDetailsChange(index, "amount", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <IconButton
                color="error"
                onClick={() => removeOtherDetail(index)}
                disabled={otherDetails.length === 1}
              >
                <Remove />
              </IconButton>
              <IconButton color="primary" onClick={addOtherDetail}>
                <Add />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Box>

      {/* Section: 80DD / 80U */}
      <Box sx={{ boxShadow: 2, p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Section 80DD / 80U
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Disabled Member
            </Typography>
            <FormControl fullWidth>
              <Select
                name="disabledMember"
                value={formData.disabledMember}
                onChange={handleChange}
              >
                <MenuItem value="Self">Self</MenuItem>
                <MenuItem value="Family Member">Family Member</MenuItem>
                <MenuItem value="Both">Both</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      {/* Section: 80DDB */}
      <Box sx={{ boxShadow: 2, p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Section 80DDB
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Diseased Citizen
            </Typography>
            <FormControl fullWidth>
              <Select
                name="diseasedCitizen"
                value={formData.diseasedCitizen}
                onChange={handleChange}
              >
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="Normal Citizen">
                  Normal Citizen (Less than 60 years)
                </MenuItem>
                <MenuItem value="Senior Citizen">
                  Senior Citizen (60 years and above)
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Total Expenditure
            </Typography>
            <TextField
              fullWidth
              name="totalExpenditure"
              value={formData.totalExpenditure}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Section: 80E */}
      <Box sx={{ boxShadow: 2, p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Section 80E
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Education Loan Interest
            </Typography>
            <TextField
              fullWidth
              name="educationLoan"
              value={formData.educationLoan}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Section: 80GG */}
      <Box sx={{ boxShadow: 2, p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Section 80GG
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Rent Paid for the Year
            </Typography>
            <TextField
              fullWidth
              name="rentPaid"
              value={formData.rentPaid}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              Number of Months
            </Typography>
            <TextField
              fullWidth
              name="rentMonths"
              value={formData.rentMonths}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Section: 80TTA / 80TTB */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Section 80TTA / 80TTB
      </Typography>
      <Typography variant="body2" gutterBottom>
        Note: Under Section 80TTA/80TTB, you get a deduction on your savings
        bank interest, which the system auto-considers while computing your
        taxable income. Mention your savings account interest in the "Other
        Sources" income page.
      </Typography>
    </Box>
  );
}

export default TaxForm;
