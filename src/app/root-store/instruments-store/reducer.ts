import { Action, createReducer, on } from '@ngrx/store';
import * as instrumentsActions from './actions';
import { IInstrumentsState, initialInstrumentState } from './state';

const reducer = createReducer(
  initialInstrumentState,
  on(instrumentsActions.getInstruments, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(instrumentsActions.getInstrumentsSuccess, (state, { devices }) => {
    const tempDevices = devices.concat(dummyDevices);
    return {
      ...state,
      isLoading: false,
      error: null,
      instruments: tempDevices,
    };
  }),
  on(instrumentsActions.sortInstruments, (state, { sortOrder }) => {
    return {
      ...state,
      sortOrder,
    };
  }),
  on(instrumentsActions.applyInstrumentsFilter, (state) => {
    return {
      ...state,
      filters: [...state.proposedFilters],
    };
  }),
  on(
    instrumentsActions.proposedInstrumentsFilter,
    (state, { proposedFilter }) => {
      let proposedFilters: string[];
      if (state.proposedFilters.includes(proposedFilter)) {
        proposedFilters = state.proposedFilters.filter(
          (filter) => filter !== proposedFilter
        );
      } else {
        proposedFilters = [...state.proposedFilters, proposedFilter];
      }
      return {
        ...state,
        proposedFilters,
      };
    }
  )
);

export function instrumentsReducers(
  state: IInstrumentsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

const dummyDevices = [
  {
    _id: 'revos-asia-device777',
    serialNumber: 'RS0000000777',
    deviceName: 'Cryostar NX70',
    softwareVersion: '1.1.1-FPGA',
    firmwareVersion: 'NIOS 1.1.1-FPGA',
    status: 'Available',
  },
  {
    _id: 'revos-asia-device777',
    serialNumber: 'RS0000000777',
    deviceName: 'Cryostar NX69',
    softwareVersion: '1.1.1-FPGA',
    firmwareVersion: 'NIOS 1.1.1-FPGA',
    status: 'Available',
  },
  {
    _id: 'revos-asia-device777',
    serialNumber: 'RS0000000777',
    deviceName: 'HM355S F',
    softwareVersion: '1.1.1-FPGA',
    firmwareVersion: 'NIOS 1.1.1-FPGA',
    status: 'Available',
  },
  {
    _id: 'revos-asia-device777',
    serialNumber: 'RS0000000777',
    deviceName: 'HM355 G',
    softwareVersion: '1.1.1-FPGA',
    firmwareVersion: 'NIOS 1.1.1-FPGA',
    status: 'Available',
    instrument_type: 'HM355S',
  },
  {
    _id: 'revos-asia-device777',
    serialNumber: 'RS0000000777',
    deviceName: 'TissueProcessor H',
    softwareVersion: '1.1.1-FPGA',
    firmwareVersion: 'NIOS 1.1.1-FPGA',
    status: 'Available',
    instrument_type: 'Asterisk',
  },
];
