import { deviceList } from './../../device-store/selectors';
import { State } from './../../device-store/state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetDevices } from 'src/device-store/actions';
import { Device } from 'src/models/device.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent implements OnInit, OnDestroy {

  filterApllied = false;
  activeFilter = [];

  allList: Device[] = [];
  favList: Device[] = [];
  deviceList: Device[] = [];
  subscription$: Subscription;
  constructor(private store: Store<State>) { }


  ngOnInit(): void {
    this.store.dispatch(new GetDevices());
    this.subscription$ = this.store.select(deviceList).subscribe((res: Device[]) => {


      this.allList = res;
      this.deviceList = res;
    });

  }
  applyFilter(type: string) {

    if (this.activeFilter.includes(type)) {
      this.activeFilter.splice(this.activeFilter.indexOf(type), 1);
    } else {
      this.activeFilter.push(type);
    }
    this.filterApllied = true;
    this.deviceList = [...this.allList];

    this.deviceList = this.deviceList.filter((device) => {
      return this.activeFilter.includes(device.type);
    })
  }
  filterRemoved() {
    this.filterApllied = false;
    this.deviceList = [...this.allList];
    this.activeFilter = [];

  }

  checkFilter(filter: string) {
    return this.activeFilter.includes(filter);
  }
  sortDevices(val: number) {

    if (val == 0) {
      this.deviceList = [...this.deviceList].sort((a, b) => a.deviceName !== b.deviceName ? a.deviceName < b.deviceName ? -1 : 1 : 0)
    } else {
      this.deviceList = [...this.deviceList].sort((a, b) => a.deviceName !== b.deviceName ? a.deviceName < b.deviceName ? 1 : -1 : 0)
    }
  }
  addToFavorite(item: Device) {

    if(this.favList.length >=3 ) {
      return;
    }
    this.deviceList = this.deviceList.filter(device => device._id != item._id);
    this.allList = this.allList.filter(device => device._id != item._id);
    this.favList = [...this.favList, item];

  }
  removeFromFavorite(item: Device) {
    this.favList = this.favList.filter(device => device._id != item._id);
    this.deviceList = [...this.deviceList, item];
    this.allList = [...this.deviceList, item];

  }

  /**
   * unsubscribe from all subscription
   */
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
