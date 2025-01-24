import React, { useState } from "react";
import {
  Grid,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Box,
  Card,
  CardContent,
  Select,
  MenuItem,
} from "@mui/material";

const IncomeForm2 = () => {
  const [interestIncome, setInterestIncome] = useState({
    fromSaving: "",
    fromTaxRefund: "",
    fromFixedDeposit: "",
  });

  const [hasDividendIncome, setHasDividendIncome] = useState(false);
  const [dividendIncome, setDividendIncome] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const [otherIncomes, setOtherIncomes] = useState({
    anyOther: false,
    familyPension: false,
    exemptIncome: false,
  });

  const [otherIncome, setOtherIncome] = React.useState({
    hasOtherIncome: false,
    amount: "",
  });

  const [familyPension, setFamilyPension] = React.useState({
    hasFamilyPension: false,
    received: "",
    deduction: "",
    netPension: "",
  });

  const [exemptIncome, setExemptIncome] = useState({
    hasExemptIncome: false,
    otherType: "",
    amount: "",
  });

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          mt: 5,
          fontWeight: "bold",
          textAlign: "center",
          color: "#253243",
          fontSize: "1.5rem",
          mb: 2,
        }}
      >
        ENTER DETAILS OF INCOME FROM OTHER SOURCES
      </Typography>
      <Box
        p={3}
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
        {/* Interest Income Section */}
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap", // Ensures proper wrapping on smaller screens
                gap: 2, // Adds gap for better spacing between items when wrapped
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#253243", fontSize: "16px", fontWeight: "bold" }}
              >
                Earning income from interests?
              </Typography>
              <ToggleButtonGroup
                value={interestIncome.hasInterest}
                exclusive
                sx={{
                  mt: { xs: 1, sm: 0 }, // Adds top margin for smaller screens
                }}
                onChange={(_, value) => {
                  if (value !== null) {
                    setInterestIncome({
                      ...interestIncome,
                      hasInterest: value,
                    });
                  }
                }}
              >
                <ToggleButton value={false}>No</ToggleButton>
                <ToggleButton value={true}>Yes</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {interestIncome.hasInterest && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ color: "#253243", fontSize: "13px" }}>
                    Interest from Saving Bank A/c
                  </Typography>
                  <TextField
                    fullWidth
                    value={interestIncome.fromSaving}
                    onChange={(e) =>
                      setInterestIncome({
                        ...interestIncome,
                        fromSaving: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ color: "#253243", fontSize: "13px" }}>
                    Interest from Income Tax Refund
                  </Typography>
                  <TextField
                    fullWidth
                    value={interestIncome.fromTaxRefund}
                    onChange={(e) =>
                      setInterestIncome({
                        ...interestIncome,
                        fromTaxRefund: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ color: "#253243", fontSize: "13px" }}>
                    Interest from Fixed Deposit
                  </Typography>
                  <TextField
                    fullWidth
                    value={interestIncome.fromFixedDeposit}
                    onChange={(e) =>
                      setInterestIncome({
                        ...interestIncome,
                        fromFixedDeposit: e.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>

        {/* Dividend Income Section */}
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Aligns text and buttons in one row
                flexWrap: "wrap", // Ensures wrapping on smaller screens
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#253243",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Do you have Dividend Income?
              </Typography>
              <ToggleButtonGroup
                value={hasDividendIncome}
                exclusive
                sx={{
                  ml: 2, // Adds spacing between text and buttons
                  mt: { xs: 1, sm: 0 }, // Top margin for smaller screens
                }}
                onChange={(_, value) => {
                  if (value !== null) setHasDividendIncome(value);
                }}
              >
                <ToggleButton value={false}>No</ToggleButton>
                <ToggleButton value={true}>Yes</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {hasDividendIncome && (
              <Box>
                <Typography sx={{ mb: 1 }}>
                  Please provide Quarterly breakup of Dividend Income:
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#253243", fontSize: "13px" }}>
                      i. Up to 15-Jun-2023
                    </Typography>
                    <TextField
                      fullWidth
                      value={dividendIncome.q1}
                      onChange={(e) =>
                        setDividendIncome({
                          ...dividendIncome,
                          q1: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#253243", fontSize: "13px" }}>
                      ii. From 16-Jun-2023 to 15-Sep-2023
                    </Typography>
                    <TextField
                      fullWidth
                      value={dividendIncome.q2}
                      onChange={(e) =>
                        setDividendIncome({
                          ...dividendIncome,
                          q2: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#253243", fontSize: "13px" }}>
                      iii. From 16-Sep-2023 to 15-Dec-2023
                    </Typography>
                    <TextField
                      fullWidth
                      value={dividendIncome.q3}
                      onChange={(e) =>
                        setDividendIncome({
                          ...dividendIncome,
                          q3: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#253243", fontSize: "13px" }}>
                      iv. From 16-Dec-2023 to 15-Mar-2024
                    </Typography>
                    <TextField
                      fullWidth
                      value={dividendIncome.q4}
                      onChange={(e) =>
                        setDividendIncome({
                          ...dividendIncome,
                          q4: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography sx={{ color: "#253243", fontSize: "13px" }}>
                      v. From 16-Mar-2024 to 31-Mar-2024
                    </Typography>
                    <TextField
                      fullWidth
                      value={dividendIncome.q5}
                      onChange={(e) =>
                        setDividendIncome({
                          ...dividendIncome,
                          q5: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </Box>
            )}
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Aligns text and buttons in one row
                flexWrap: "wrap", // Ensures responsiveness on smaller screens
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#253243",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Any Other Income?
              </Typography>
              <ToggleButtonGroup
                value={otherIncome.hasOtherIncome}
                exclusive
                sx={{
                  ml: 2, // Adds space between text and toggle buttons
                  mt: { xs: 1, sm: 0 }, // Adds top margin on small screens for better spacing
                }}
                onChange={(_, value) => {
                  if (value !== null) {
                    setOtherIncome({ ...otherIncome, hasOtherIncome: value });
                  }
                }}
              >
                <ToggleButton value={false}>No</ToggleButton>
                <ToggleButton value={true}>Yes</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {otherIncome.hasOtherIncome && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    sx={{ color: "#253243", fontSize: "13px", mb: 1 }}
                  >
                    Please enter amount of any other income earned
                  </Typography>
                  <TextField
                    fullWidth
                    value={otherIncome.amount}
                    onChange={(e) =>
                      setOtherIncome({ ...otherIncome, amount: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Keeps the toggle buttons and text aligned in one row
                flexWrap: "wrap", // Allows wrapping on smaller screens
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#253243", fontSize: "16px", fontWeight: "bold" }}
              >
                Do you have any family pension income?
              </Typography>
              <ToggleButtonGroup
                value={familyPension.hasFamilyPension}
                exclusive
                sx={{
                  ml: 2, // Adds spacing between text and toggle buttons
                }}
                onChange={(_, value) =>
                  value !== null &&
                  setFamilyPension({
                    ...familyPension,
                    hasFamilyPension: value,
                  })
                }
              >
                <ToggleButton value={false}>No</ToggleButton>
                <ToggleButton value={true}>Yes</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            {familyPension.hasFamilyPension && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Typography
                    sx={{ color: "#253243", fontSize: "13px", mb: 1 }}
                  >
                    Family Pension Received
                  </Typography>
                  <TextField
                    fullWidth
                    value={familyPension.received}
                    onChange={(e) =>
                      setFamilyPension({
                        ...familyPension,
                        received: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    sx={{ color: "#253243", fontSize: "13px", mb: 1 }}
                  >
                    Less: Deduction u/s 57(iia)
                  </Typography>
                  <TextField
                    fullWidth
                    value={familyPension.deduction}
                    onChange={(e) =>
                      setFamilyPension({
                        ...familyPension,
                        deduction: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    sx={{ color: "#253243", fontSize: "13px", mb: 1 }}
                  >
                    Net Family Pension
                  </Typography>
                  <TextField
                    fullWidth
                    value={familyPension.netPension}
                    onChange={(e) =>
                      setFamilyPension({
                        ...familyPension,
                        netPension: e.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Places text and buttons in one row
                flexWrap: "wrap", // Ensures wrapping on smaller screens
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#253243", fontSize: "16px", fontWeight: "bold" }}
              >
                Other exempt income: For reporting purpose
              </Typography>
              <ToggleButtonGroup
                value={exemptIncome.hasExemptIncome}
                exclusive
                sx={{
                  ml: 2, // Adds spacing between text and buttons
                }}
                onChange={(_, value) => {
                  if (value !== null) {
                    setExemptIncome({
                      ...exemptIncome,
                      hasExemptIncome: value,
                    });
                  }
                }}
              >
                <ToggleButton value={false}>No</ToggleButton>
                <ToggleButton value={true}>Yes</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {exemptIncome.hasExemptIncome && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    sx={{ color: "#253243", fontSize: "13px", mb: 1 }}
                  >
                    Other (if any)
                  </Typography>
                  <Select
                    fullWidth
                    value={exemptIncome.otherType}
                    onChange={(e) =>
                      setExemptIncome({
                        ...exemptIncome,
                        otherType: e.target.value,
                      })
                    }
                    displayEmpty
                    sx={{ fontSize: "13px" }}
                  >
                    <MenuItem value="">Please Select</MenuItem>
                    <MenuItem value="otherType1">
                      Agriculture Income (Rs. 5000/-)
                    </MenuItem>
                    <MenuItem value="otherType2">
                      Any amount from the Central/State Govt./Local authorities
                      by way of compensation on account of any disaster
                    </MenuItem>
                    <MenuItem value="otherType3">
                      Any sum received under a Life Insurance Policy
                    </MenuItem>
                    <MenuItem value="otherType4">
                      Statuory Provident Fund received
                    </MenuItem>
                    <MenuItem value="otherType5">
                      Recognised Provident Fund received
                    </MenuItem>
                    <MenuItem value="otherType6">
                      Any payment from the Agniveer Corpus Fund to a person
                      enrolled under the Agnipath Scheme, or to his nominee
                    </MenuItem>
                    <MenuItem value="otherType7">
                      Approved Superannuation Fund received
                    </MenuItem>
                    <MenuItem value="otherType8">
                      Scholarships received to meet the cost of education
                    </MenuItem>
                    <MenuItem value="otherType9">Allowance MP/MLA/MIC</MenuItem>
                    <MenuItem value="otherType10">
                      Award instituted by Government
                    </MenuItem>
                    <MenuItem value="otherType11">
                      Pension received by winner of "Param Vir Chakra" or "Maha
                      Vir Chakra" or "Vir Chakra"
                    </MenuItem>
                    <MenuItem value="otherType12">
                      Defense Medical Disability Perision
                    </MenuItem>
                    <MenuItem value="otherType13">
                      Armed Forces Family pension in case of death during
                      operational duty
                    </MenuItem>
                    <MenuItem value="otherType14">
                      Any Income as referred to in section 10(26)
                    </MenuItem>
                    <MenuItem value="otherType15">
                      Any income as referred to in section 10(26AAA)
                    </MenuItem>
                    <MenuItem value="otherType16">Any other</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    sx={{ color: "#253243", fontSize: "13px", mb: 1 }}
                  >
                    Amount
                  </Typography>
                  <TextField
                    fullWidth
                    value={exemptIncome.amount}
                    onChange={(e) =>
                      setExemptIncome({
                        ...exemptIncome,
                        amount: e.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default IncomeForm2;
