import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";

const BusinessIncomeForm0 = () => {
  const [presumptiveIncome, setPresumptiveIncome] = useState({
    natureOfBusiness: "",
    businessName: "",
    turnoverBank: "",
    turnoverCash: "",
    totalIncome: "",
  });

  const [financialDetails, setFinancialDetails] = useState({
    gstReported: false,
    gstNumber: "",
    gstTurnover: "",
  });

  const handlePresumptiveChange = (e) => {
    const { name, value } = e.target;
    setPresumptiveIncome((prev) => ({ ...prev, [name]: value }));
  };

  const handleFinancialDetailsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFinancialDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
      }}
    >
      {/* Presumptive Business Income */}

      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          1. Presumptive Business Income
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography>Nature of business</Typography>
            <FormControl fullWidth>
              <Select
                name="natureOfBusiness"
                value={presumptiveIncome.natureOfBusiness}
                onChange={handlePresumptiveChange}
              >
                <MenuItem value="">
                  <em>Please Select</em>
                </MenuItem>
                <MenuItem value="Goods Carriage">Goods Carriage</MenuItem>
                <MenuItem value="Legal profession">Legal Profession</MenuItem>
                <MenuItem value="Software Development">
                  Software Development
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>Name of the Business</Typography>
            <TextField
              fullWidth
              name="businessName"
              value={presumptiveIncome.businessName}
              onChange={handlePresumptiveChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>Gross Turnover through Bank</Typography>
            <TextField
              fullWidth
              name="turnoverBank"
              value={presumptiveIncome.turnoverBank}
              onChange={handlePresumptiveChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>Gross Turnover through Cash</Typography>
            <TextField
              fullWidth
              name="turnoverCash"
              value={presumptiveIncome.turnoverCash}
              onChange={handlePresumptiveChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>Total Presumptive Income</Typography>
            <TextField
              fullWidth
              name="totalIncome"
              value={presumptiveIncome.totalIncome}
              onChange={handlePresumptiveChange}
            />
          </Grid>
          <Grid container item xs={12} justifyContent="flex-end">
            <Button variant="contained" color="primary">
              + Add Presumptive Income
            </Button>
          </Grid>
        </Grid>
      </CardContent>

      {/* Financial Details */}
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          FINANCIAL PARTICULARS (as on 31st March)
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={financialDetails.gstReported}
                  onChange={handleFinancialDetailsChange}
                  name="gstReported"
                />
              }
            />
          </Grid>
          {financialDetails.gstReported && (
            <>
              <Typography variant="h5" sx={{ ml: 2, mb: 2 }}>
                Total Assets
              </Typography>
              <Grid container spacing={3} sx={{ ml: 1, mb: 2 }}>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Fixed Assets</Typography>
                  <TextField
                    fullWidth
                    name="fixedAssets"
                    value={financialDetails.fixedAssets}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Stock-In-Trade</Typography>
                  <TextField
                    fullWidth
                    name="stockInTrade"
                    value={financialDetails.stockInTrade}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Balance with Banks</Typography>
                  <TextField
                    fullWidth
                    name="balanceWithBanks"
                    value={financialDetails.balanceWithBanks}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Cash Balance</Typography>
                  <TextField
                    fullWidth
                    name="cashBalance"
                    value={financialDetails.cashBalance}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ ml: 1, mb: 2 }}>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Sundry Debtors</Typography>
                  <TextField
                    fullWidth
                    name="sundryDebtors"
                    value={financialDetails.sundryDebtors}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Loans and Advances</Typography>
                  <TextField
                    fullWidth
                    name="loansAndAdvances"
                    value={financialDetails.loansAndAdvances}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Other Assets</Typography>
                  <TextField
                    fullWidth
                    name="otherAssets"
                    value={financialDetails.otherAssets}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
              </Grid>

              <Typography variant="h5" gutterBottom sx={{ ml: 2, mb: 2 }}>
                Total Capital and Liabilities
              </Typography>
              <Grid container spacing={3} sx={{ ml: 1, mb: 2 }}>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>
                    Fixed Assets (Liabilities)
                  </Typography>
                  <TextField
                    fullWidth
                    name="fixedAssetsLiabilities"
                    value={financialDetails.fixedAssetsLiabilities}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Secured Loans</Typography>
                  <TextField
                    fullWidth
                    name="securedLoans"
                    value={financialDetails.securedLoans}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Unsecured Loans</Typography>
                  <TextField
                    fullWidth
                    name="unsecuredLoans"
                    value={financialDetails.unsecuredLoans}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Advances</Typography>
                  <TextField
                    fullWidth
                    name="advances"
                    value={financialDetails.advances}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ ml: 1, mb: 2 }}>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Sundry Creditors</Typography>
                  <TextField
                    fullWidth
                    name="sundryCreditors"
                    value={financialDetails.sundryCreditors}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography sx={{ mb: 1 }}>Other Liabilities</Typography>
                  <TextField
                    fullWidth
                    name="otherLiabilities"
                    value={financialDetails.otherLiabilities}
                    onChange={handleFinancialDetailsChange}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Turnover / Gross Receipt reported for GST
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">GSTIN</Typography>
            <TextField
              fullWidth
              name="gstNumber"
              value={financialDetails.gstNumber}
              onChange={handleFinancialDetailsChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              Turnover / Gross receipt as per the GST return filed
            </Typography>
            <TextField
              fullWidth
              name="gstTurnover"
              value={financialDetails.gstTurnover}
              onChange={handleFinancialDetailsChange}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Box>
  );
};

export default BusinessIncomeForm0;
