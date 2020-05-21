import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from 'src/models/device.model';
import {
  faFileImage,
  faEllipsisV,
  faCircle,
  faStar,
  faCog,
  faPen,
  faTrashAlt,


} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  @Input()
  isFav: boolean;

  @Input()
  device: Device;
  @Output()
  favoriteDeviceclicked: EventEmitter<Device> = new EventEmitter(null);


  faFileImage = faFileImage;
  faStar = faStar;
  faEllipsisV = faEllipsisV;
  faCircle = faCircle;
  faCog = faCog;
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  constructor() { }

  ngOnInit(): void {
  }

  addTofav() {
    this.favoriteDeviceclicked.emit(this.device);
  }

}
