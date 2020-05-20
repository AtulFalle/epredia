
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  State } from './state';

export const selectDeviceState = createFeatureSelector<State>('device');

export const deviceList = createSelector(selectDeviceState, (state: State) => state.deviceList);
