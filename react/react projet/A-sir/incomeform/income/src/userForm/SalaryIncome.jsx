import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Box, Paper, Divider } from '@mui/material';

const SalaryForm = () => {
  // States for each input field
  const [grossSalary, setGrossSalary] = useState(0);
  const [perquisites, setPerquisites] = useState(0);
  const [profitInLieuOfSalary, setProfitInLieuOfSalary] = useState(0);
  const [exemptHRA, setExemptHRA] = useState(0);
  const [LTA, setLTA] = useState(0);
  const [gratuity, setGratuity] = useState(0);
  const [otherExemptions, setOtherExemptions] = useState(0);
  const [standardDeduction, setStandardDeduction] = useState(0);
  const [tdsDeducted, setTdsDeducted] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [tan, setTan] = useState('');

  // Calculate net salary after exempted allowances
  const netSalary = grossSalary + perquisites + profitInLieuOfSalary - (exemptHRA + LTA + gratuity + otherExemptions);
  
  // Calculate income chargeable under the head 'Salaries'
  const incomeUnderSalaries = netSalary - standardDeduction;

  return (
    <Box sx={{
      boxShadow: 3,
      borderRadius: 2,
      backgroundColor: "white",
      color: "#0a2342",
      maxWidth: "lg",
      p: 3,
      mt: 2,
      margin: "0 auto",
    }}>
      <Typography variant="h5" align="left" gutterBottom>
        Salary Details Form
      </Typography>

      {/* Gross Salary Section */}
      <Typography variant="h6" align="left" gutterBottom sx={{ my: 2 }}>
        1) Gross Salary / CTC
      </Typography>
      <Grid container spacing={2}>
        {/* Salary and Perquisites */}
        <Grid item xs={12} sm={4}>
          <Typography>Salary / Pension Income (Annual)</Typography>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            value={grossSalary}
            onChange={(e) => setGrossSalary(Number(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography>Value of perquisites</Typography>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            value={perquisites}
            onChange={(e) => setPerquisites(Number(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography>Profit in lieu of salary </Typography>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            value={profitInLieuOfSalary}
            onChange={(e) => setProfitInLieuOfSalary(Number(e.target.value))}
          />
        </Grid>
      </Grid>

      <Divider sx={{ margin: '1rem 0' }} />

      {/* Exempted Allowances Section */}
      <Typography variant="h6" align="left" gutterBottom sx={{ my: 2 }}>
        2) Less : Exempted Allowances
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography>Exempt HRA</Typography>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            value={exemptHRA}
            onChange={(e) => setExemptHRA(Number(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography>LTA</Typography>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            value={LTA}
            onChange={(e) => setLTA(Number(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography>Gratuity</Typography>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            value={gratuity}
            onChange={(e) => setGratuity(Number(e.target.value))}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography>Other Exemptions</Typography>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            value={otherExemptions}
            onChange={(e) => setOtherExemptions(Number(e.target.value))}
          />
        </Grid>
      </Grid>

      <Divider sx={{ margin: '1rem 0' }} />

      {/* Net Salary and Deductions */}
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ marginTop: '1rem' }}>
          3) Net Salary (Gross Salary - Exempted Allowances) ₹ {netSalary.toFixed(2)}
        </Typography>
      </Grid>

      <Typography variant="h6" sx={{ marginTop: '1rem' }}>
        4) Less: Deductions under section 16
      </Typography>
      <Grid item xs={12} sm={4}>
        <Typography>Standard Deduction</Typography>
        <TextField
          variant="outlined"
          fullWidth
          type="number"
          value={standardDeduction}
          onChange={(e) => setStandardDeduction(Number(e.target.value))}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" sx={{ marginTop: '1rem' }}>
          Income chargeable under the head 'Salaries': ₹ {incomeUnderSalaries.toFixed(2)}
        </Typography>
      </Grid>

      <Divider sx={{ margin: '1rem 0' }} />

      {/* Employer Details Section */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Employer Details & TDS Deducted Title */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Employer Details & TDS Deducted
          </Typography>
        </Grid>

        {/* Company / Employer Name */}
        <Grid item xs={12} sm={4}>
          <Typography>Company / Employer Name</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Grid>

        {/* TDS Deducted by Employer */}
        <Grid item xs={12} sm={4}>
          <Typography>TDS Deducted by Employer</Typography>
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            value={tdsDeducted}
            onChange={(e) => setTdsDeducted(Number(e.target.value))}
          />
        </Grid>

        {/* TAN of Employer */}
        <Grid item xs={12} sm={4}>
          <Typography>TAN of Employer</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={tan}
            onChange={(e) => setTan(e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SalaryForm;
