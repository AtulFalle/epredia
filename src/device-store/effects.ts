
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { DeviceService } from '../app/shared/service/device.service';
import { DeviceActionType, GetDevices, GetDevicesSuccess } from './actions';


@Injectable()
export class DeviceStoreEffects {
  constructor(
    private actions$: Actions,
    private deviceService: DeviceService
  ) { }

  @Effect()
  getDevice$ = this.actions$.pipe(
    ofType<GetDevices>(DeviceActionType.getDevices),
    switchMap(() => this.deviceService.getDevices()),
    switchMap((devices) => {
      return of(new GetDevicesSuccess(devices));
    })
  );
}
