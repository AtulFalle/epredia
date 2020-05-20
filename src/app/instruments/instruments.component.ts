import { State } from './../../device-store/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetDevices } from 'src/device-store/actions';
import { Device } from 'src/models/device.model';
import { Observable } from 'rxjs';
import { deviceList } from 'src/device-store/selectors';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent implements OnInit {

  deviceList: Observable<Device[]>;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetDevices());
    this.deviceList = this.store.select(deviceList);

  }

}
