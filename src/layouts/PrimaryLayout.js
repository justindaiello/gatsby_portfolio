import React from 'react';
import { StyledImg, StyledMain } from './LayoutStyles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Polygon from '../images/Polygon.svg';
import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/darkTheme';
import Switch from '../components/Switch';
import actions from '../context/actions';

import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body}
  }
`;

const PrimaryLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { hasDarkTheme } = useSelector((state) => state);

  function toggleTheme() {
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
    dispatch(actions.setHasDarkTheme());
  }

  return (
    <ThemeProvider theme={toggleTheme()}>
      <GlobalStyle />
      <StyledMain>
        <Switch handleClick={handleThemeChange} title="Switch Theme" />
        {children}
        <StyledImg src={Polygon} />
      </StyledMain>
    </ThemeProvider>
  );
};

export default PrimaryLayout;
