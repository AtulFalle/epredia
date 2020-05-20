import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './componants/footer/footer.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
