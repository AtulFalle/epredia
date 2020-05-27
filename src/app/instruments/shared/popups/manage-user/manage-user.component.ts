import { Device } from './../../../../../models/device.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  @Input()
  device:Device;

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter(false);

  faDelete = faTrash;
  constructor() { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.onClose.emit(true);

  }

}
