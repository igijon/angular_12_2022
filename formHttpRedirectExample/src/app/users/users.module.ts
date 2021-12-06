import { NgModule } from '@angular/core';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    NuevoUsuarioComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class UsersModule { }
