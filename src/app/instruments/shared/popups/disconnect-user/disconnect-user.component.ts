import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-disconnect-user',
  templateUrl: './disconnect-user.component.html',
  styleUrls: ['./disconnect-user.component.scss']
})
export class DisconnectUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll();
      }

}
