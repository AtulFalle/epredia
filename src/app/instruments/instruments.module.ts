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


@NgModule({
  declarations: [InstrumentsComponent, DeviceDetailsComponent],
  imports: [
    CommonModule,
    InstrumentsRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature(),
    DeviceStoreModule,
    NgbModule
  ]
})
export class InstrumentsModule { }
