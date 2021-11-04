export class PersonalData {

  private _surname: string;
  private _name: string;
  private _placeOfBirth: string;
  private _dateOfBirth: string;
  private _fiscalCode: string;
  private _partitaIVA: string;
  private _phoneNumber: string;
  private _otherNumber?: string;
  private _email: string;
  private _documentType: string;
  private _documentNumber: string;
  private _placeOfIssue: string;
  private _dateOfIssue: string;
  private _expiryDate: string;

  constructor() {

    this._surname = '';
    this._name = '';
    this._placeOfBirth = '';
    this._dateOfBirth = '';
    this._fiscalCode = '';
    this._partitaIVA = '';
    this._phoneNumber = '';
    this._otherNumber = '';
    this._email = '';
    this._documentType = '';
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
    return this._placeOfBirth;
  }
  public set placeOfBirth(value: string) {
    this._placeOfBirth = value;
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
  public get documentType(): string {
    return this._documentType;
  }
  public set documentType(value: string) {
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
    this._placeOfIssue = value;
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

  toJSon() {
    return {
      surname: this._surname,
      name: this._name,
      placeofBirth: this._placeOfBirth,
      dateOfBirth: this._dateOfBirth,
      fiscalCode: this._fiscalCode,
      partitaIVA: this._partitaIVA,
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