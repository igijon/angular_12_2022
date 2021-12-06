import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvisosService } from 'src/app/shared/services/avisos.service';
import { User } from '../../models/user';
import { RestUsersService } from '../../services/rest-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  submitted: boolean = false;
  user?: User;

  constructor(private formBuilder: FormBuilder, private restUserService: RestUsersService, private notificationService: AvisosService, private router: Router) {
    //con esto en el constructor estamos definiendo un formulario reactivo de Angular, indicando que va a tener
    //dos controles usuario e email que se van a corresponder con los nombres de los controles en el HTML.
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern]]
    });
  }

  ngOnInit(): void {
  }

  //Devuelve los controles del formulario (esto se usa en el html)
  get formulario() {
    return this.login.controls;
  }

  //Método que hace el envío del formulario
  onSubmit() {
    this.submitted = true;
    if(this.login.invalid)
      return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
    let user = new User("", this.login.value.email, this.login.value.password);
    this.onReset();
    //Deberíamos realizar esta petición para comprobar el usuario y después navegar a la pantalla principal
    //Después del aviso
    /*this.restUserService.getUser(user).subscribe({
      next: (user) => {
        this.notificationService.showMessage('Usuario ${this.nuevoUsuario.value.email} logeado.', 'principal');
        this.user = user;
      },
      error: e => {
        this.notificationService.showMessage(`Fallo en el login: `+e)
      }
    })*/
    //Esta línea redirige siempre al principal, cuando se descomente la parte del api, comentar esta
    this.notificationService.showMessage(`Usuario ${user.email} logeado`,'app/home');

  }

  //Permite limpiar el formulario
  onReset() {
    this.submitted = false;
    this.login.reset();
  }

  onRegister() {
    this.router.navigate(['users/register']);
  }

}
