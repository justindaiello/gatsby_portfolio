import React from 'react';
import { StyledImg } from './LayoutStyles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Polygon from '../images/Polygon.svg';
import lightTheme from '../styles/lightTheme';
import Header from '../components/header/Header';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body}
  }
`;

const PrimaryLayout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      {children}
      <StyledImg src={Polygon} />
    </ThemeProvider>
  );
};

export default PrimaryLayout;
