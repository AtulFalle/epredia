import { createAction, props, Action } from '@ngrx/store';
import { Device } from '../models/device.model';

export enum DeviceActionType {
  getDevices = '[Device Component] Load',
  getDevicesSuccess = '[Device Success] Load Successfully',
  getDevicesError = '[Device Error] Load Failed',

}
export class GetDevices implements Action {
  public readonly type = DeviceActionType.getDevices;

}

export class GetDevicesSuccess implements Action {
  public readonly type = DeviceActionType.getDevicesSuccess;
  constructor(public payload: Device[]) { }

}
export class GetDevicesError implements Action {
  public readonly type = DeviceActionType.getDevicesError;

}

export type DeviceAction = GetDevices | GetDevicesSuccess | GetDevicesError;
