import { HeaderComponent } from './componants/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './componants/footer/footer.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[HeaderComponent, FooterComponent]
})
export class SharedModule { }
