import React from 'react';
import { Box, Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: "#f9f9f9" }}>
      <Container>{children}</Container>
    </Box>
  );
};

export default Layout;
