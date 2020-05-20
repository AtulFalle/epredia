

export interface State {
  isLoading?: boolean;
  error?: any;
  total?: number;
  selectedDeviceId?: string | number;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  selectedDeviceId: null,
  total: 0
};
