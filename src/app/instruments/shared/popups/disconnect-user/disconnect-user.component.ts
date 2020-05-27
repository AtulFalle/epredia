import { Device } from './../../../../../models/device.model';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-disconnect-user',
  templateUrl: './disconnect-user.component.html',
  styleUrls: ['./disconnect-user.component.scss']
})
export class DisconnectUserComponent implements OnInit {

  @Input()
  device: Device;

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter(false);

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.onClose.emit(true);

  }

}
