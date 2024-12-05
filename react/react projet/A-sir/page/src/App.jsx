import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme'
import TEDNextPage from './Pages/TEDNextpage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TEDNextPage />
    </ThemeProvider>
    
  );
}

export default App;

