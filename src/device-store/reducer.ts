
import { Action, createReducer, on } from '@ngrx/store';
import { DeviceAction, DeviceActionType } from './actions';
import { initialState, State } from './state';


export function reducer(state: State = initialState, action: DeviceAction): State {

  switch (action.type) {
    case DeviceActionType.getDevicesSuccess:
      return { ...state, deviceList: action.payload };

    default:
      return state;
  }


}
