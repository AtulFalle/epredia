import { NgModule, Optional, SkipSelf } from '@angular/core';
import { InstrumentsService } from './services';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';

@NgModule({
  declarations: [],
  providers: [InstrumentsService],
  imports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
