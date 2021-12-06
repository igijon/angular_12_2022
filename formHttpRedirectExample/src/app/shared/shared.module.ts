import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisosComponent } from './components/avisos/avisos.component';
import { HttpClientModule, } from '@angular/common/http';



@NgModule({
  declarations: [
    AvisosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    AvisosComponent
  ]
})
export class SharedModule { }
