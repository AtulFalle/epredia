import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InstrumentsStoreEffects } from './effects';
import { instrumentsReducers } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('instruments', instrumentsReducers),
    EffectsModule.forFeature([InstrumentsStoreEffects]),
  ],
  providers: [InstrumentsStoreEffects],
})
export class InstrumentsStoreModule {}
