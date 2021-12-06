import { UserResponse } from "./req-response";

export class User {

  static userFromJSON(obj: UserResponse) {
    return new User(
      obj['usuario'],
      obj['email'],
      obj['passwd']
    );
  }

  constructor(
    public usuario: string,
    public email: string,
    public passwd: string
    ){}
}
