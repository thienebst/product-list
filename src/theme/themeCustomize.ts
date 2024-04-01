import { createTheme } from "@mui/material/styles"
 

export const themeCustomize = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      100: '#6713EF',   
    },
  },
  colors: {
    primary: {
      100: '#6713EF',
      90: '#762bf1', 
      80: '',
      30: '#D1B8FA'
    },
    neutral: {
      1: '#353C49',
      3: '#B1B8C0',
      4: '#D9E0E8',
      6: '#F2F4F6',
      7: '#F8F8F9',
      8: '#FFFFFF'
    },
    text: {
      0: '#202020',
      1: '#676E7B',
      3: '#B1B8C0'
    }
  },

});