import React from 'react';
import { StyledImg, StyledMain } from './LayoutStyles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Polygon from '../images/Polygon.svg';
import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/darkTheme';
import Switch from '../components/Switch';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body}
  }
`;

const PrimaryLayout = ({ children }) => {
  const [hasDarkTheme, setHasDarkTheme] = React.useState(true);

  function toggleTheme(hasDarkTheme) {
    switch (hasDarkTheme) {
      case true: {
        return darkTheme;
      }
      case false: {
        return lightTheme;
      }
      default:
        return darkTheme;
    }
  }

  function handleThemeChange() {
    setHasDarkTheme(!hasDarkTheme);
  }

  return (
    <ThemeProvider theme={toggleTheme(hasDarkTheme)}>
      <StyledMain>
        <Switch handleClick={handleThemeChange} title="Switch Theme" />
        <GlobalStyle />
        {children}
        <StyledImg src={Polygon} />
      </StyledMain>
    </ThemeProvider>
  );
};

export default PrimaryLayout;
