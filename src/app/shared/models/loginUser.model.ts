export class LoginUserModel {

  private _username: string;
  private _password: string;


  constructor() {
    this._username = '';
    this._password = '';
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  toJSon() {
    return {
      username: this._username,
      password: this._password
    };
  }

}

