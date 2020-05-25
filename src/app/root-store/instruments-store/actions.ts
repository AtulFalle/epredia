import { createAction, props } from '@ngrx/store';
import { IInstrument } from '../../core/models';

export enum InstrumentsActionTypes {
  GetInstruments = '[Instrument] Get Instruments',
  GetInstrumentsSuccess = '[Instrument] Get Instruments Successfully',
  SortInstruments = '[Instrument] Sort Instruments',
  InstrumentsFilter = '[Instruments] Instruments Filter',
}

export const getInstruments = createAction(
  InstrumentsActionTypes.GetInstruments
);

export const getInstrumentsSuccess = createAction(
  InstrumentsActionTypes.GetInstrumentsSuccess,
  props<{ devices: IInstrument[] }>()
);

export const sortInstruments = createAction(
  InstrumentsActionTypes.SortInstruments,
  props<{ sortOrder: string }>()
);

export const applyInstrumentsFilter = createAction(
  InstrumentsActionTypes.InstrumentsFilter,
  props<{ filters: string[] }>()
);
