import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f0fdf4", // Light background
        p: 4,
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Left Card */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              backgroundColor: "#6415ff", // white
              borderRadius: "8px",
              p: 3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
             <FileOpenIcon sx={{ mr: 1, fontSize: "4.5rem", color: "#fff" }} />
             {/* <img src="https://tax2win.in/assets-new/img/new-theme/self-filing-blue.svg" alt="" /> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
             
              <Typography variant="h6" fontWeight="bold" fontSize={"2.5rem"} color="white">
                File ITR Yourself
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: "#fff", fontSize:"1.2rem" }}>
              It's quick, easy, and takes only 4 minutes to file your income tax
              return. ITR filing plans start at just ₹49.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#6415ff",
                textTransform: "none",
                border: "1px solid #6415ff",
                "&:hover": {
                  backgroundColor: "#6415ff",
                  color: "#fff",
                  boxShadow: "0 2px 8px #fff",
                },
              }}
            >
              File ITR Now
            </Button>
          </Box>
        </Grid>

        {/* Right Card */}
        <Grid item xs={12} md={5}>
          
          <Box
            sx={{
              backgroundColor: "#6415ff", // Light green
              borderRadius: "8px",
              p: 3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >/
          <ContactPageIcon sx={{ mr: 1, fontSize: "4.5rem", color: "#fff" }} />
            {/* <img src="https://tax2win.in/assets-new/img/new-theme/hire-eca-green.svg" alt="" /> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="h6" fontWeight="bold" fontSize={"2.5rem"} color="white">
                Get eCA for ITR Filing
              </Typography>
              <Box
                sx={{
                 
                  borderRadius: "4px",
                  color: "#fff",
                  p: "2px 8px",
                }}
              >
             
              </Box>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: "#fff", fontSize: "1.2rem" }}>
              Hire personal eCA to do Income Tax Filing for you. It is
              convenient & fast with maximum refund calculated for you.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#6415ff",
                textTransform: "none",
                border: "1px solid #6415ff",
                "&:hover": {
                  backgroundColor: "#6415ff",
                  color: "#fff",
                  boxShadow: "0 2px 8px #fff",
                },
              }}
            >
              Book eCA Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
