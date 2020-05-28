import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '../../shared/shared.module';
import { InstrumentsComponent } from './instruments/instruments.component';
import { InstrumentsDetailsComponent } from './instruments-details/instruments-details.component';
import { InstrumentsFavoriteComponent } from './instruments-favorite/instruments-favorite.component';

@NgModule({
  declarations: [HomeComponent, InstrumentsComponent, InstrumentsDetailsComponent, InstrumentsFavoriteComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
