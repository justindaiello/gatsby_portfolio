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
  // const [hasDarkTheme, setHasDarkTheme] = React.useState(true);
  const dispatch = useDispatch();
  const { hasDarkTheme } = useSelector((state) => state);

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
    dispatch(actions.setHasDarkTheme());
  }

  return (
    <ThemeProvider theme={toggleTheme(hasDarkTheme)}>
      {console.log(hasDarkTheme)}
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
