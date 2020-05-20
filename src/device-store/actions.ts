
import { createAction, props, Action } from '@ngrx/store';
export enum DeviceActionType {
  Load = '[Device Component] Load',
  SearchDevices = '[Device Component] Search Device',

}

export const load = createAction(DeviceActionType.Load);
export const searchDevices = createAction(
  DeviceActionType.SearchDevices,
  props<{ query: any }>()
);

export class AddToFav implements Action {
  public readonly type: DeviceActionType.SearchDevices;
  constructor(public payload: any ) {}


}
