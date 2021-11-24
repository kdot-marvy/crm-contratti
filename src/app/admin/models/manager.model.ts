import { Package } from './package.model';
export class Manager {
  private _name: string;
  private _enabled: number;
  private _packages: Array<Package>;
  constructor() {

    this._name = '';
    this._enabled = 0;
    this._packages = new Array;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get enabled(): number {
    return this._enabled;
  }
  public set enabled(value: number) {
    this._enabled = value;
  }

  public get packages(): Array<Package> {
    return this._packages;
  }
  public set packages(value: Array<Package>) {
    this._packages = value;
  }

  toJSon() {
    return {
      nome: this._name,
      enabled: this._enabled,
      packages: this._packages.forEach((element:Package) => {element.toJSon()})
    };
  }
}
