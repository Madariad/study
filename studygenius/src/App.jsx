import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme/index";
import * as React from 'react'

import { RouterProvider } from 'react-router-dom';

import  NavBar  from "./components/navBar/navBar";


import router from "./routes/routes";


import Container from '@mui/material/Container'
import ResponsiveDrawer from './components/drawer/ResponsiveDrawer';
import TeachingPage from './pages/teaching-page/TeachingPage';
import SidebarRouter from './routes/SidebarRouter';

import EducationPage from "./pages/education-page";
import ErrorRoutePages from "./components/ErrorRoutePages/index";
import Lesson from "./pages/lesson-page/index";

import { CreatingContext } from './context';
import { useEffect } from 'react';

import { useDispatch } from "react-redux";




function App() {
  const dispath = useDispatch()
  if (localStorage.getItem('token') && localStorage.getItem('token') != undefined) {
    
    useEffect(() => {
      function getUserData() {
        dispath({type: "GET_USERDATA"})
      }
      getUserData()
    }, [])
  }
  // console.log(router.state.location.pathname)
  const startsWith = (str, prefix) => {
    return str.indexOf(prefix) === 0
  }
  // console.log(router.state.location.pathname);
  const mode = useSelector((state) => state.theme.mode);
  const theme = mode === 'light' ? lightTheme : darkTheme;
  if (startsWith(router.state.location.pathname, '/education') ) {
    return <EducationPage />;
  }
  if (/^\/.+\/lessons/.test(router.state.location.pathname)) {
    console.log(router.state.location.pathname);
    return <Lesson />;
  }
  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      {!startsWith(router.state.location.pathname, '/teach') && !startsWith(router.state.location.pathname, '/courses') ? 
      <>
      <NavBar />

   
          <RouterProvider router={router} />

 
 
      </> : 
        <TeachingPage/>
       }
    </ThemeProvider> 
  );
}

export default App;
