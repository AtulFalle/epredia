import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-disconnect-admin',
  templateUrl: './disconnect-admin.component.html',
  styleUrls: ['./disconnect-admin.component.scss']
})
export class DisconnectAdminComponent implements OnInit {

  userSelection:number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog() {
this.dialog.closeAll();
  }

}
