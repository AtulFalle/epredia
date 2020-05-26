import { deviceList } from './../../device-store/selectors';
import { State } from './../../device-store/state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetDevices } from 'src/device-store/actions';
import { Device } from 'src/models/device.model';
import { Observable, Subscription } from 'rxjs';

import { faSortAmountUp, faSortAlphaUpAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent implements OnInit, OnDestroy {

  filterIcon = faSortAmountUp;
  sorticon = faSortAlphaUpAlt;

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
    if (this.activeFilter.length < 1) {
      this.filterApllied = false;
      this.deviceList = [...this.allList];
      return;
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

    if (this.favList.length >= 3) {
      return;
    }
    // this.deviceList = this.deviceList.filter(device => device._id != item._id);
    // this.allList = this.allList.filter(device => device._id != item._id);
    this.favList = [...this.favList, item];

  }
  removeFromFavorite(item: Device) {
    this.favList = this.favList.filter(device => device._id != item._id);
    // this.allList = [...this.deviceList, item];

    // // Check if current filter is applied or not
    // if (this.activeFilter.length > 0) {
    //   if (this.activeFilter.includes(item.type)) {
    //     this.deviceList = [...this.deviceList, item];

    //   }
    // }else {
    //     this.deviceList = [...this.deviceList, item];

    // }
  }

  checkToHideInInAll( device: Device) :boolean {

    return this.favList.includes(device) || ( !this.activeFilter.includes(device.type) && this.activeFilter.length > 0 );
  }

  searchDevice(val: string) {

console.log(val);

  }


  /**
   * unsubscribe from all subscription
   */
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
