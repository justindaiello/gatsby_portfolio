import React from 'react';
import { StyledImg } from './LayoutStyles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Polygon from '../images/Polygon.svg';
import lightTheme from '../styles/lightTheme';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body}
  }
`;

const PrimaryLayout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <main>
        <GlobalStyle />
        {children}
        <StyledImg src={Polygon} />
      </main>
    </ThemeProvider>
  );
};

export default PrimaryLayout;
