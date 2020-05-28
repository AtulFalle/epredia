import { createSelector } from '@ngrx/store';
import { IInstrumentsState, initialInstrumentState } from './state';
import { State } from '../state';
import { IInstrument } from '../../core/models';

const selectInstruments = (state: State) => state.instruments.instruments;
const selectSortOrder = (state: State) => state.instruments.sortOrder;
const selectFilters = (state: State) => state.instruments.filters;
const selectProposedFilters = (state: State) =>
  state.instruments.proposedFilters;

export const instrumentsFilters = createSelector(selectFilters, (filters) => {
  return filters;
});

export const selectFavoriteInstruments = createSelector(
  selectInstruments,
  (instruments): IInstrument[] => {
    return instruments.filter((instrument) => {
      if (instrument.favorite) {
        return true;
      }
      return false;
    });
  }
);

export const selectAllInstrumentsFilters = createSelector(
  selectInstruments,
  selectProposedFilters,
  (instruments: IInstrument[], proposedFilters: string[]) => {
    const instrumentsSerialNum = instruments.map(
      (instrument) => instrument.serialNumber
    );
    const uniqueInstrumentsSerialNum = Array.from(
      new Set(instrumentsSerialNum)
    );
    return uniqueInstrumentsSerialNum.map((serialNum) => ({
      serialNum,
      selected: proposedFilters.includes(serialNum),
    }));
  }
);

export const selectFilteredInstrumentsList = createSelector(
  selectInstruments,
  selectSortOrder,
  selectFilters,
  (instruments: IInstrument[], sortOrder: string, filters: string[]) => {
    const filteredInstruments =
      filters.length > 0
        ? instruments.filter((instrument) =>
            filters.includes(instrument.serialNumber)
          )
        : [...instruments];
    switch (sortOrder) {
      case 'Name A-Z':
        return filteredInstruments.sort((a, b) =>
          compareStrings(a.deviceName, b.deviceName)
        );
      case 'Name Z-A':
        return filteredInstruments.sort((a, b) =>
          compareStrings(b.deviceName, a.deviceName)
        );
      case 'Status':
        return filteredInstruments.sort((a, b) =>
          compareStrings(a.status, b.status)
        );
      default:
        return filteredInstruments;
    }
  }
);

function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a < b ? -1 : a > b ? 1 : 0;
}
