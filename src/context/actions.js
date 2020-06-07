import { createAction } from '@reduxjs/toolkit';

const setIsOn = createAction('setIsOn');
const setIsHidden = createAction('setIsHidden');
const setHasDarkTheme = createAction('setHasDarkTheme');

export default { setIsHidden, setHasDarkTheme, setIsOn };
