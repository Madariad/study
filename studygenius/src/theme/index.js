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
        main: '#e5e5e5'
      },
      searchInputColor: {
        main: '#696969'
      },
      cardColor: {
        main: '#add6ff'
      },
      cardBtnColor: {
        main: '#6c6'
      },
      colorText: {
        main: 'black'
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
        main: '#464646'
      },
      searchInputColor: {
        main: '#9370DB'
      },
      cardColor: {
        main: '#e9b0cf'
      },
      cardBtnColor: {
        main: '#3e9f8d'
      },
      colorText: {
        main: 'white'
      }
      // остальные свойства цветов
    },
  });
  
  export { lightTheme, darkTheme };