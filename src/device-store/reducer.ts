
import { Action, createReducer, on } from '@ngrx/store';
import * as deviceActions from './actions';
import {  initialState, State } from './state';

const featureReducer = createReducer(
  initialState,
  on(deviceActions.load, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(deviceActions.searchDevices, state => ({
    ...state,
    isLoading: true,
    error: null
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
