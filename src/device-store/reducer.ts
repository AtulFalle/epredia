
import { Action, createReducer, on } from '@ngrx/store';
import { DeviceAction, DeviceActionType } from './actions';
import { initialState, State } from './state';


export function reducer(state: State = initialState, action: DeviceAction): State {

  switch (action.type) {
    case DeviceActionType.getDevicesSuccess:
      return { ...state, deviceList: action.payload };

    case DeviceActionType.updateDevice: {

      const updateDevice = action.payload;
      const deviceList = [...state.deviceList];
      for (const device of deviceList) {
        if (device._id == updateDevice._id) {
          const index = deviceList.indexOf(device);
          deviceList[index] = updateDevice;
        }
      }
      return { ...state, deviceList: deviceList }

    }

    default:
      return state;
  }


}
