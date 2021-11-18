export class Address {

  private _address: string;
  private _addressNumber: string;
  private _zipCode: string;
  private _location: string;
  private _addressType: string;



  constructor() {

    this._address = '';
    this._addressNumber = '';
    this._zipCode = '';
    this._location = '';
    this._addressType = '';
  }

  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }


  public get addressNumber(): string {
    return this._addressNumber;
  }
  public set addressNumber(value: string) {
    this._addressNumber = value;
  }

  public get zipCode(): string {
    return this._zipCode;
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }

  public get location(): string {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  public get addressType(): string {
    return this._addressType;
  }

  public set addressType(_addressType: string) {
    this._addressType = _addressType;
  }


  toJSon() {
    return {
      address: this._address,
      addressNumber: this._addressNumber,
      codicePostale: this._zipCode,
      localita: this._location,
      addressType: this._addressType,
    }
  }
}
