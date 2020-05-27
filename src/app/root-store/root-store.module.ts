import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InstrumentsStoreModule } from './instruments-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstrumentsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
})
export class RootStoreModule {}
