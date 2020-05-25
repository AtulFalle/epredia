import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { InstrumentsService } from '../../core/services';
import * as instrumentsActions from './actions';
import { IInstrumentHttp } from '../../core/models/http-models';

@Injectable()
export class InstrumentsStoreEffects {
  constructor(
    private instrumentsService: InstrumentsService,
    private actions$: Actions
  ) {}

  @Effect()
  getInstruments$ = this.actions$.pipe(
    ofType(instrumentsActions.InstrumentsActionTypes.GetInstruments),
    switchMap(() => this.instrumentsService.getInstruments()),
    switchMap((instrumentsHttp: IInstrumentHttp) =>
      observableOf(instrumentsActions.getInstrumentsSuccess(instrumentsHttp))
    )
  );
}
