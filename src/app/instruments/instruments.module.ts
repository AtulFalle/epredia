import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviceStoreModule } from './../../device-store/device-store.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentsRoutingModule } from './instruments-routing.module';
import { InstrumentsComponent } from './instruments.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetailsComponent } from './componants/device-details/device-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';
import { DisconnectUserComponent} from './shared/popups/disconnect-user/disconnect-user.component';
import { DisconnectAdminComponent} from './shared/popups/disconnect-admin/disconnect-admin.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ManageUserComponent } from './shared/popups/manage-user/manage-user.component';

@NgModule({
  declarations: [InstrumentsComponent, DeviceDetailsComponent, DisconnectUserComponent, DisconnectAdminComponent, ManageUserComponent],
  imports: [
    CommonModule,
    InstrumentsRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature(),
    DeviceStoreModule,
    NgbModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule

  ]
})
export class InstrumentsModule { }
