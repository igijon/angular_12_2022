import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisosService } from 'src/app/shared/services/avisos.service';
import { User } from '../../models/user';
import { RestUsersService } from '../../services/rest-users.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss'],
})
export class NuevoUsuarioComponent implements OnInit {
  nuevoUsuario: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private restUserService: RestUsersService,
    private notificationService: AvisosService
  ) {
    //con esto en el constructor estamos definiendo un formulario reactivo de Angular, indicando que va a tener
    //dos controles usuario e email que se van a corresponder con los nombres de los controles en el HTML.
    this.nuevoUsuario = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern]],
    });
  }

  ngOnInit(): void {}

  //Devuelve los controles del formulario (esto se usa en el html)
  get formulario() {
    return this.nuevoUsuario.controls;
  }

  //Método que hace el envío del formulario
  onSubmit() {
    this.submitted = true;
    if (this.nuevoUsuario.invalid) return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
    let user = new User(
      this.nuevoUsuario.value.usuario,
      this.nuevoUsuario.value.email,
      this.nuevoUsuario.value.password
    );
    this.onReset();
    //ESte bloque de código habría que descomentarlo para hacer el registro
    /*this.restUserService.addUser(user).subscribe({
      next: () => {
        this.notificationService.showMessage(`Usuario ${user.email} registrado correctamente.`, '');
      },
      error: e => {
        this.notificationService.showMessage('Fallo en el registro: '+ e)
      }
    })*/
    //Esta línea de código hay que comentarla porque es la que simula que se ha hecho bien
    this.notificationService.showMessage(
      `Usuario ${user.email} registrado correctamente`,
      ''
    );
  }

  //Permite limpiar el formulario
  onReset() {
    this.submitted = false;
    this.nuevoUsuario.reset();
  }
}
