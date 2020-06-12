import React from 'react';
import { StyledImg, StyledMain, StyledPlaceholder } from './LayoutStyles';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Polygon from '../images/Polygon.svg';
import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/darkTheme';
import Switch from '../components/Switch';
import actions from '../context/actions';

import 'normalize.css';

const PrimaryLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { hasDarkTheme } = useSelector((state) => state);
  const hasWindow = typeof window !== 'undefined';
  const themeCookie = hasWindow && window.localStorage.getItem('themeCookie');
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    if (themeCookie) {
      dispatch(actions.setHasDarkTheme(themeCookie));
    } else {
      hasWindow && window.localStorage.setItem('themeCookie', 'dark');
      dispatch(actions.setHasDarkTheme('dark'));
    }
    setIsMounted(true);
  }, [themeCookie, dispatch, hasWindow]);

  function toggleTheme() {
    switch (hasDarkTheme) {
      case 'dark': {
        return darkTheme;
      }
      case 'light': {
        return lightTheme;
      }
      default:
        return darkTheme;
    }
  }

  function handleThemeChange() {
    if (hasDarkTheme === 'dark') {
      hasWindow && window.localStorage.setItem('themeCookie', 'light');
      dispatch(actions.setHasDarkTheme('light'));
    } else {
      hasWindow && window.localStorage.setItem('themeCookie', 'dark');
      dispatch(actions.setHasDarkTheme('dark'));
    }
  }

  if (!isMounted) {
    return <StyledPlaceholder />;
  }

  return (
    <ThemeProvider theme={toggleTheme()}>
      {console.log(hasDarkTheme)}
      <StyledMain>
        <Switch handleClick={handleThemeChange} title="Switch Theme" />
        {children}
        <StyledImg src={Polygon} />
      </StyledMain>
    </ThemeProvider>
  );
};

export default PrimaryLayout;
