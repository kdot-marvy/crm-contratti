export class Package {
  private _name: string;

  constructor() {

    this._name = '';
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  toJSon() {
    return {
      nome: this._name,
    };
  }
}
