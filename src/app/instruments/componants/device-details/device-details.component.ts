import { Device } from './../../../../models/device.model';
import { State } from './../../../../device-store/state';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  faFileImage,
  faEllipsisV,
  faCircle,
  faStar,
  faCog,
  faPen,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DisconnectAdminComponent } from '../../shared/popups/disconnect-admin/disconnect-admin.component';
import { DisconnectUserComponent } from '../../shared/popups/disconnect-user/disconnect-user.component';
import { SharedService } from '../../shared/service/shared.service';
import { Store } from '@ngrx/store';
import { UpdateDevice } from 'src/device-store/actions';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  isEditName = false;  // flag to check if user is allowed/clicked to edit name or not
  @Input()
  index: number;

  @Input()
  isFav: boolean;

  @Input()
  device: Device;
  @Output()
  favoriteDeviceclicked: EventEmitter<Device> = new EventEmitter(null);
  @Output()
  deviceDeleted: EventEmitter<Device> = new EventEmitter(null);


  faFileImage = faFileImage;
  faStar = faStar;
  faEllipsisV = faEllipsisV;
  faCircle = faCircle;
  faCog = faCog;
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  showToolbar = false;

  deviceDate: Device;
  constructor(public dialog: MatDialog, private sharedService: SharedService, private store: Store<State>) { }

  ngOnInit(): void {
  }

  disconnectDevice() {

    this.sharedService.isUserisAdmin() ? this.openAdminDialog() : this.openUserDialog();


  }

  private openAdminDialog() {
    const diaRef = this.dialog.open(DisconnectAdminComponent, {
      data: this.device
    });
    diaRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  openUserDialog() {
    const diaRef = this.dialog.open(DisconnectUserComponent, {
      data: this.device
    });
    diaRef.afterClosed().subscribe(res => {
      console.log(res);

    });
  }

  addTofav() {
    this.showToolbar = false;
    this.favoriteDeviceclicked.emit(this.device);
  }
  editDeviceName() {
    this.deviceDate = {...this.device};
    this.isEditName = true;
  }
  deviceNameEditDone() {
    this.isEditName = false;
    this.store.dispatch(new UpdateDevice(this.deviceDate));
  }

  deviceDeleteClicked(){
    this.showToolbar = false;
    this.deviceDeleted.emit(this.device);
  }
}
