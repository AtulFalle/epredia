import { Device } from './../../../../../models/device.model';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-disconnect-admin',
  templateUrl: './disconnect-admin.component.html',
  styleUrls: ['./disconnect-admin.component.scss']
})
export class DisconnectAdminComponent implements OnInit {

  userSelection:number = 0;
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
