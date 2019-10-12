import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import Header from '../components/header/Header';

const PrimaryLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default PrimaryLayout;
