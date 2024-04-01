import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
 
import { StylesProvider } from '@mui/styles';
import { themeCustomize } from './themeCustomize'

interface Props {
  children: React.ReactNode;
}
declare module "@mui/material/styles" {
  interface CustomTheme {
    colors: {
      primary: {
        100: string,
        90: string,
        80: string,
        30: string,
      },
      neutral: {
        1: string,
        3: string,
        4: string,
        6: string,
        7: string,
        8: string,
      },
      text: {
        0: string,
        1: string,
        3: string,
      }

    }
  }

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}
const ThemeProviderWrapper: React.FC<Props> = (props) => {
   

  return (
    <StylesProvider injectFirst>
       <ThemeProvider theme={themeCustomize}>{props.children}</ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
