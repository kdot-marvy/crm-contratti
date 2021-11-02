export class ContractModel {

  //Dati Anagrafici
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

  //Dati Gestore
  private _manager: string[];
  private _package: string[];
  private _coverage: string[];
  private _additionalOptions: string[];
  private _portability: string;
  private _portabilityNumber: string;
  private _vodafoneStationSerial: string;
  private _simStatus: string;
  private _activationDate: string;
  private _serialSimOperator: string;
  private _managerOfOrigin: string;
  private _newSimSerial: string;
  private _migrationCode: string;
  private _simType: string;
  private _pod: string[];
  private _pdr: string;
  private _serialNumber: string;
  private _previousSupplier: string;

  //Dati Contabili
  private _fileStatus: string[];
  private _paymentType: string[];
  private _cardUserSurname?: string;
  private _cardUserName?: string;
  private _cardUserFiscalCode?: string;
  private _cardType?: string[];
  private _creditCardNumber?: string;
  private _creditCardExpiryDate?: string;
  private _IBANcode?: string;
  private _paymentStatus: string[];
  private _cashedByBrand: string[];
  private _commissionAgent: string[];
  private _agent: string[];

  constructor() {
    //Dati Anagrafici
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

    //Dati Gestore
    this._manager = [];
    this._package = [];
    this._coverage = [];
    this._additionalOptions = [];
    this._portability = '';
    this._portabilityNumber = '';
    this._vodafoneStationSerial = '';
    this._simStatus = '';
    this._activationDate = '';
    this._serialSimOperator = '';
    this._managerOfOrigin = '';
    this._newSimSerial = '';
    this._migrationCode = '';
    this._simType = '';
    this._pod = [];
    this._pdr = '';
    this._serialNumber = '';
    this._previousSupplier = '';

    //Dati Contabili
    this._fileStatus = [];
    this._paymentType = [];
    this._cardUserSurname = '';
    this._cardUserName = '';
    this._cardUserFiscalCode = '';
    this._cardType = [];
    this._creditCardNumber = '';
    this._creditCardExpiryDate = '';
    this._IBANcode = '';
    this._paymentStatus = [];
    this._cashedByBrand = [];
    this._commissionAgent = [];
    this._agent = [];
  }

  //Dati Anagrafici
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

  //Dati Gestore
  public get manager(): string[] {
    return this._manager;
  }
  public set manager(value: string[]) {
    this._manager = value;
  }

  public get package(): string[] {
    return this._package;
  }
  public set package(value: string[]) {
    this._package = value;
  }
  public get coverage(): string[] {
    return this._coverage;
  }
  public set coverage(value: string[]) {
    this._coverage = value;
  }
  public get additionalOptions(): string[] {
    return this._additionalOptions;
  }
  public set additionalOptions(value: string[]) {
    this._additionalOptions = value;
  }
  public get portability(): string {
    return this._portability;
  }
  public set portability(value: string) {
    this._portability = value;
  }
  public get portabilityNumber(): string {
    return this._portabilityNumber;
  }
  public set portabilityNumber(value: string) {
    this._portabilityNumber = value;
  }
  public get vodafoneStationSerial(): string {
    return this._vodafoneStationSerial;
  }
  public set vodafoneStationSerial(value: string) {
    this._vodafoneStationSerial = value;
  }
  public get simStatus(): string {
    return this._simStatus;
  }
  public set simStatus(value: string) {
    this._simStatus = value;
  }
  public get activationDate(): string {
    return this._activationDate;
  }
  public set activationDate(value: string) {
    this._activationDate = value;
  }
  public get serialSimOperator(): string {
    return this._serialSimOperator;
  }
  public set serialSimOperator(value: string) {
    this._serialSimOperator = value;
  }
  public get managerOfOrigin(): string {
    return this._managerOfOrigin;
  }
  public set managerOfOrigin(value: string) {
    this._managerOfOrigin = value;
  }
  public get newSimSerial(): string {
    return this._newSimSerial;
  }
  public set newSimSerial(value: string) {
    this._newSimSerial = value;
  }
  public get migrationCode(): string {
    return this._migrationCode;
  }
  public set migrationCode(value: string) {
    this._migrationCode = value;
  }
  public get simType(): string {
    return this._simType;
  }
  public set simType(value: string) {
    this._simType = value;
  }
  public get pod(): string[] {
    return this._pod;
  }
  public set pod(value: string[]) {
    this._pod = value;
  }
  public get pdr(): string {
    return this._pdr;
  }
  public set pdr(value: string) {
    this._pdr = value;
  }
  public get serialNumber(): string {
    return this._serialNumber;
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public get previousSupplier(): string {
    return this._previousSupplier;
  }
  public set previousSupplier(value: string) {
    this._previousSupplier = value;
  }

  //Dati Contabili
  public get fileStatus(): string[] {
    return this._fileStatus;
  }
  public set fileStatus(value: string[]) {
    this._fileStatus = value;
  }
  public get paymentType(): string[] {
    return this._paymentType;
  }
  public set paymentType(value: string[]) {
    this._paymentType = value;
  }
  public get cardUserSurname(): string {
    return this._cardUserSurname;
  }
  public set cardUserSurname(value: string) {
    this._cardUserSurname = value;
  }
  public get cardUserName(): string {
    return this._cardUserName;
  }
  public set cardUserName(value: string) {
    this._cardUserName = value;
  }
  public get cardUserFiscalCode(): string {
    return this._cardUserFiscalCode;
  }
  public set cardUserFiscalCode(value: string) {
    this._cardUserFiscalCode = value;
  }
  public get cardType(): string[] {
    return this._cardType;
  }
  public set cardType(value: string[]) {
    this._cardType = value;
  }
  public get creditCardNumber(): string {
    return this._creditCardNumber;
  }
  public set creditCardNumber(value: string) {
    this._creditCardNumber = value;
  }
  public get creditCardExpiryDate(): string {
    return this._creditCardExpiryDate;
  }
  public set creditCardExpiryDate(value: string) {
    this._creditCardExpiryDate = value;
  }
  public get carIBANcode(): string {
    return this._IBANcode;
  }
  public set IBANcode(value: string) {
    this._IBANcode = value;
  }
  public get paymentStatus(): string[] {
    return this._paymentStatus;
  }
  public set paymentStatus(value: string[]) {
    this._paymentStatus = value;
  }
  public get cashedByBrand(): string[] {
    return this._cashedByBrand;
  }
  public set cashedByBrand(value: string[]) {
    this._cashedByBrand = value;
  }
  public get commissionAgent(): string[] {
    return this._commissionAgent;
  }
  public set commissionAgent(value: string[]) {
    this._commissionAgent = value;
  }
  public get agent(): string[] {
    return this._agent;
  }
  public set agent(value: string[]) {
    this._agent = value;
  }


  toJSon() {
    return {
      //Dati Anagrafici
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

      //Dati Gestore
      manager: this._manager,
      package: this._package,
      coverage: this._coverage,
      additionalOptions: this._additionalOptions,
      portability: this._portability,
      portabilityNumber: this._portabilityNumber,
      vodafoneStationSerial: this._vodafoneStationSerial,
      simStatus: this._simStatus,
      activationDate: this._activationDate,
      serialSimOperator: this._serialSimOperator,
      managerOfOrigin: this._managerOfOrigin,
      newSimSerial: this._newSimSerial,
      migrationCode: this._migrationCode,
      simType: this._simType,
      pod: this._pod,
      pdr: this._pdr,
      serialNumber: this._serialNumber,
      previousSupplier: this._previousSupplier,

      //Dati Contabili
      fileStatus: this._fileStatus,
      paymentType: this._paymentType,
      cardUserSurname: this._cardUserSurname,
      cardUserName: this._cardUserName,
      cardUserFiscalCode: this._cardUserFiscalCode,
      cardType: this._cardType,
      creditCardNumber: this._creditCardNumber,
      creditCardExpiryDate: this._creditCardExpiryDate,
      IBANcode: this._IBANcode,
      paymentStatus: this._paymentStatus,
      cashedByBrand: this._cashedByBrand,
      commissionAgent: this._commissionAgent,
      agent: this._agent
    };
  }

}

