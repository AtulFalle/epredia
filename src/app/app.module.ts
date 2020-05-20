import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceStoreModule } from '../device-store';
import { MicroContainerComponent } from './componants/micro-container/micro-container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MicroContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceStoreModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
