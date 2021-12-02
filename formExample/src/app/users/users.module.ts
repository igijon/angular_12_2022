import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NuevoUsuarioComponent
  ]
})
export class UsersModule { }
