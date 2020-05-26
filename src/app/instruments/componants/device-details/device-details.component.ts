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
import { MatDialog } from '@angular/material/dialog';
import { DisconnectAdminComponent } from '../../shared/popups/disconnect-admin/disconnect-admin.component';
import { DisconnectUserComponent } from '../../shared/popups/disconnect-user/disconnect-user.component';
import { SharedService } from '../../shared/service/shared.service';

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
  showToolbar = false;

  constructor(public dialog: MatDialog, private sharedService: SharedService) { }

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
      data: this.device });
    diaRef.afterClosed().subscribe(res => {
      console.log(res);

    });
  }

  addTofav() {
    this.favoriteDeviceclicked.emit(this.device);
  }

}
