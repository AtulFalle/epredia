
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  State } from './state';

export const selectDeviceState = createFeatureSelector<State>('device');


export const selectTotalDeviceItems = createSelector(
    selectDeviceState,
    (state: State): number => {
        return state.total;
    }
);

const selectSelectedDeviceId = createSelector(
    selectDeviceState,
    (state: State): string | number => state.selectedDeviceId
);

