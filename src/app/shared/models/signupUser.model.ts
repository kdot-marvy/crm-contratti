export class SignupUserModel {
  _username: string;
  _password: string;
  _firstName: string;
  _email: string;
  _lastName: string;
  _confirmPassword: string;

  constructor() {
    this._username = '';
    this._password = '';
    this._firstName = '';
    this._email = '';
    this._lastName = '';
    this._confirmPassword = '';
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

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }


  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get confirmPassword(): string {
    return this._confirmPassword;
  }
  public set confirmPassword(value: string) {
    this._confirmPassword = value;
  }

  toJSon() {
    return {
      username: this._username,
      password: this._password,
      email: this._email,
      firstName: this._firstName,
      lastName: this._lastName,
    };
  }
 }
