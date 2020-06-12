import { createAction } from '@reduxjs/toolkit';

const setIsHidden = createAction('setIsHidden');
const setHasDarkTheme = createAction('setHasDarkTheme');

export default { setIsHidden, setHasDarkTheme };
