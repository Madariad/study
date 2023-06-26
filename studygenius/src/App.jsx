import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme/index";

import { RouterProvider } from 'react-router-dom';

import  NavBar  from "./components/navBar/navBar";


import router from "./routes/routes";


function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <NavBar />
   
          <RouterProvider router={router} />
 
    </ThemeProvider> 
  );
}

export default App;
