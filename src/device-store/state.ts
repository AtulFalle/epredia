import { Device } from '../models/device.model';


export interface State {

  deviceList: Device[]
}

export const initialState: State = {
  deviceList: []
};
