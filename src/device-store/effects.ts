
  import { get } from 'lodash';
  import { of } from 'rxjs';
  import { Injectable } from '@angular/core';
  import { Actions, createEffect, ofType } from '@ngrx/effects';
  import { catchError, concatMap, map, switchMap, mergeMap } from 'rxjs/operators';

  import * as deviceActions from './actions';


  @Injectable()
  export class DeviceStoreEffects {
  constructor(
    private actions$: Actions,

  ) { }

  loadRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deviceActions.load),
      // concatMap(() =>
      //   // this.dataService.searchDevices()
      //   //   .pipe(
      //   //     map(items =>
      //   //       deviceActions.loadSuccess({
      //   //         devices: items.data.items.map(item => this.deviceAdapter.adapt(item))
      //   //       })
      //   //     ),
      //   //     catchError(error => of(deviceActions.actionFailure({ error })))
      //   //   )
      // )
    )
  );

  searchDevicesEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deviceActions.searchDevices),
      // switchMap((action: any) => {
      //   delete action.type;
      //   return this.dataService.searchDevices(action)
      //     .pipe(
      //       mergeMap(items => {
      //         return [
      //           deviceActions.loadSuccess({
      //             devices: items ? items.data.items.map(item => this.deviceAdapter.adapt(item)) : []
      //         }),
      //         deviceActions.updateTotal({
      //           total: items ? items.data.pagination.total : 0
      //         })
      //       ];
      //     }),
      //       catchError(error => of(deviceActions.actionFailure({ error })))
      //     );
      // })
    // );
    )
  });
  }
