export class PersonalData {

    private _surname: string;
  private _name: string;
  private _palceOfBirth: string;
  private _dateOfBirth: string;
  private _fiscalCode: string;
  private _partitaIVA: string;
  private _addressType: string[];
  private _address: string;
  private _addressNumber: string;
  private _zipCode: string;
  private _location: string;
  private _phoneNumber: string;
  private _otherNumber?: string;
  private _email: string;
  private _documentType: string[];
  private _documentNumber: string;
  private _placeOfIssue: string;
  private _dateOfIssue: string;
  private _expiryDate: string;

  constructor(){
      
    this._surname = '';
    this._name = '';
    this._palceOfBirth = '';
    this._dateOfBirth = '';
    this._fiscalCode = '';
    this._partitaIVA = '';
    this._addressType = [];
    this._address = '';
    this._addressNumber = '';
    this._zipCode = '';
    this._location = '';
    this._phoneNumber = '';
    this._otherNumber = '';
    this._email = '';
    this._documentType = [];
    this._documentNumber = '';
    this._placeOfIssue = '';
    this._dateOfIssue = '';
    this._expiryDate = '';
  }

  public get surname(): string {
    return this._surname;
  }
  public set surname(value: string) {
    this._surname = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get placeOfBirth(): string {
    return this._palceOfBirth;
  }
  public set placeOfBirth(value: string) {
    this._palceOfBirth = value;
  }
  public get dateOfBirth(): string {
    return this._dateOfBirth;
  }
  public set dateOfBirth(value: string) {
    this._dateOfBirth = value;
  }
  public get fiscalCode(): string {
    return this._fiscalCode;
  }
  public set fiscalCode(value: string) {
    this._fiscalCode = value;
  }
  public get partitaIVA(): string {
    return this._partitaIVA;
  }
  public set partitaIVA(value: string) {
    this._partitaIVA = value;
  }
  public get addressType(): string[] {
    return this._addressType;
  }
  public set addressType(value: string[]) {
    this._addressType = value;
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
  public get phoneNumber(): string {
    return this._phoneNumber;
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public get otherNumber(): string {
    return this._otherNumber;
  }
  public set otherNumber(value: string) {
    this._otherNumber = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get documentType(): string[] {
    return this._documentType;
  }
  public set documentType(value: string[]) {
    this._documentType = value;
  }
  public get documentNumber(): string {
    return this._documentNumber;
  }
  public set documentNumber(value: string) {
    this._documentNumber = value;
  }
  public get placeOfIssue(): string {
    return this._placeOfIssue;
  }
  public set placeOfIssue(value: string) {
    this._palceOfBirth = value;
  }
  public get dateOfIssue(): string {
    return this._dateOfIssue;
  }
  public set dateOfIssue(value: string) {
    this._dateOfIssue = value;
  }
  public get expiryDate(): string {
    return this._expiryDate;
  }
  public set expiryDate(value: string) {
    this._expiryDate = value;
  }

  toJson(){
      return {
      surname: this._surname,
      name: this._name,
      placeofBirth: this._palceOfBirth,
      dateOfBirth: this._dateOfBirth,
      fiscalCode: this._fiscalCode,
      partitaIVA: this._partitaIVA,
      addrressType: this._addressType,
      address: this._address,
      addressNumber: this._addressNumber,
      zipCode: this._zipCode,
      location: this._location,
      phoneNumber: this._phoneNumber,
      otherNumber: this._otherNumber,
      email: this._email,
      documentType: this._documentType,
      documentNumber: this._documentNumber,
      placeOfIssue: this._placeOfIssue,
      dateOfIssue: this._dateOfIssue,
      expiryDate: this._expiryDate,
      }
  }
}