import { State } from './../../device-store/state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetDevices } from 'src/device-store/actions';
import { Device } from 'src/models/device.model';
import { Observable, Subscription } from 'rxjs';
import { deviceList } from 'src/device-store/selectors';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent implements OnInit, OnDestroy {

  allList: Device[] = [
    {
      _id: "rcom-asia-device555",
      serialNumber: "Rcom000000555",
      deviceName: "rCom - TissueProcessor A",
      softwareVersion: "-----",
      firmwareVersion: "NIOS 1.1.1-FPGA",
      status: "Available",
      type: 'rcom'
    },
    {
      _id: "rcom-asia-device56",
      serialNumber: "Rcom00000056",
      deviceName: "rCom - TissueProcessor B",
      softwareVersion: "-----",
      firmwareVersion: "NIOS 1.1.1-FPGA",
      status: "Available",
      type: 'rcom'
    }
  ];
  favList: Device[] = [];
  deviceList: Device[] = [

  ];
  subscription$: Subscription;
  constructor(private store: Store<State>) { }


  ngOnInit(): void {
    this.store.dispatch(new GetDevices());
    this.subscription$ = this.store.select(deviceList).subscribe((res: Device[]) => {

      for (const i of res) {
        const temp = {...i};
        temp.type = 'revos';
        this.deviceList.push(temp);
      }
      this.allList = [...this.allList, ...this.deviceList];
    });

  }
  applyFilter(type: string) {

    this.allList = this.allList.filter((device) => device.type == type)
  }

  /**
   * unsubscribe from all subscription
   */
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
