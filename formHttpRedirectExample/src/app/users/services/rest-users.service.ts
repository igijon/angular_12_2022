import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { User } from '../models/user';
import { UserResponse } from '../models/req-response';
import { map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestUsersService {

  constructor(private http: HttpClient) { }

  //Obtiene todos los usuarios de un API Rest
  public getUsers() {
    let url: string = "https://.../user";
    return this.http.get<UserResponse[]>(url).pipe(
      map((resp: UserResponse[]) => {
        return resp.map( user => User.userFromJSON(user))
      })
    );
  }

  //Obtiene un usuario a partir de su id
  public getUser(user: User) {
    let url: string = "https://.../user/"+user.email;
    return this.http.get<UserResponse>(url).pipe(
      map((resp: UserResponse) => {
        return User.userFromJSON(user)
      })
    );
  }

  //Login de un usuario
  public login(user: User) {
    let url: string = "https://.../login";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //Aquí si necesitásemos un token de autenticación lo meteríamos
      //Authorization: `Bearer ${authToken}`
    });
    return this.http.post(url, user, {headers: headers})
  }

  //Registra un usuario
  public addUser(user: User) {
    const url: string = "https://.../user"
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //Aquí si necesitásemos un token de autenticación lo meteríamos
      //Authorization: `Bearer ${authToken}`
    });
    return this.http.post(url, user, {headers: headers});
  }

}
