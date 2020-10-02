import { RootState } from 'types';

import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = (state: RootState) => state.activate || initialState;

export const selectActivate = createSelector(
  [selectDomain],
  activateState => activateState,
);
