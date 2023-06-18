import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme/index";

import { RouterProvider } from 'react-router-dom';

import  NavBar  from "./components/navBar/navBar";


import router from "./routes/routes";
import Container from '@mui/material/Container'

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg" sx={{marginTop: '100px'}}>
          <RouterProvider router={router} />
      </Container>
    </ThemeProvider> 
  );
}

export default App;
