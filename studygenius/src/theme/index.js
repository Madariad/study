import { createTheme } from "@mui/material/styles";


const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#FFA500',
      },
      tableColor: {
        main: '#40E0D0'
      },
      searchInputColor: {
        main: '#696969'
      }
      // остальные свойства цветов
    },
  });
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#FF1493',
      },
      secondary: {
        main: '#C71585',
      },
      tableColor: {
        main: '#40E0D0'
      },
      searchInputColor: {
        main: '#9370DB'
      }
      // остальные свойства цветов
    },
  });
  
  export { lightTheme, darkTheme };