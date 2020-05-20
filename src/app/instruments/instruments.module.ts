import { DeviceStoreModule } from './../../device-store/device-store.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentsRoutingModule } from './instruments-routing.module';
import { InstrumentsComponent } from './instruments.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [InstrumentsComponent],
  imports: [
    CommonModule,
    InstrumentsRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature(),
    DeviceStoreModule
  ]
})
export class InstrumentsModule { }
