import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = {
  isHidden: true,
  hasDarkTheme: true,
};

export default createReducer(initialState, {
  [actions.setIsHidden]: (state) => {
    state.isHidden = !state.isHidden;
  },

  [actions.setHasDarkTheme]: (state) => {
    state.hasDarkTheme = !state.hasDarkTheme;
  },
});
