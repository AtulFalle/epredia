export interface IInstrument {
  _id: string;
  deviceName: string;
  serialNumber: string;
  firmwareVersion: string;
  softwareVersion: string;
  status: string;
  type?: string;
  favorite?: boolean;
}
