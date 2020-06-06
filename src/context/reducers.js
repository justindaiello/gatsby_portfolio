import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = {
  isOpen: false,
  hasDarkTheme: true,
};

export default createReducer(initialState, {
  [actions.setIsOpen]: (state) => {
    state.isOpen = !state.isOpen;
  },

  [actions.setHasDarkTheme]: (state) => {
    state.hasDarkTheme = !state.hasDarkTheme;
  },
});
