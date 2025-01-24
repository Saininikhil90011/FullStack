import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// import * as React from 'react';
// import Button from '@mui/material/Button';


// export default function ButtonUsage() {
//   return <Button variant="contained">Hello world</Button>;
// }


// import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';

// export default function SimpleContainer() {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="sm">
//         <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
//       </Container>
//     </React.Fragment>
//   );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WebDev
          </Typography>
          <Typography  sx={{ mr: 2 , color: '#adf542', display:{ xs: 'none', md: 'flex', gap: 6 }}}>
            <p color="inherit">Home</p>
            <p color="inherit">About</p>
            <p color="inherit">Contact</p>
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Box>
        <h1>Home</h1>
        <h2>About</h2>
      </Box>
    </Box>
  );
}
