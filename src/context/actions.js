import { createAction } from '@reduxjs/toolkit';

const setIsOpen = createAction('setIsOpen');
const setHasDarkTheme = createAction('setHasDarkTheme');

export default { setIsOpen, setHasDarkTheme };
