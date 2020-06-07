import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { object } from 'prop-types';

import createReducer from './reducers';

export const store = configureStore({ reducer: createReducer });

function ReduxWrapper({ element }) {
  return <Provider store={store}>{element}</Provider>;
}

ReduxWrapper.propTypes = {
  element: object,
};

export default ReduxWrapper;
