import { IInstrument } from '../../core/models';

export interface IInstrumentsState {
  isLoading?: boolean;
  error?: any;
  selectedInstrumentId?: string | number;
  instruments: IInstrument[];
  sortOrder: string;
  filters: string[];
}

export const initialInstrumentState: IInstrumentsState = {
  isLoading: false,
  error: null,
  selectedInstrumentId: null,
  instruments: [],
  sortOrder: 'Name A-Z',
  filters: [],
};
