export class AccountingData {

    private _fileStatus: string;
    private _paymentType: string;
    private _cardUserSurname?: string;
    private _cardUserName?: string;
    private _cardUserFiscalCode?: string;
    private _cardType?: string;
    private _creditCardNumber?: string;
    private _creditCardExpiryDate?: string;
    private _IBANcode?: string;
    private _paymentStatus: string;
    private _cashedByBrand: string;
    private _commissionAgent: string;
    private _agent: string;

    constructor() {

        this._fileStatus = '';
        this._paymentType = '';
        this._cardUserSurname = '';
        this._cardUserName = '';
        this._cardUserFiscalCode = '';
        this._cardType = '';
        this._creditCardNumber = '';
        this._creditCardExpiryDate = '';
        this._IBANcode = '';
        this._paymentStatus = '';
        this._cashedByBrand = '';
        this._commissionAgent = '';
        this._agent = '';
    }

    public get fileStatus(): string {
        return this._fileStatus;
    }
    public set fileStatus(value: string) {
        this._fileStatus = value;
    }
    public get paymentType(): string {
        return this._paymentType;
    }
    public set paymentType(value: string) {
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
    public get cardType(): string {
        return this._cardType;
    }
    public set cardType(value: string) {
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
    public get IBANcode(): string {
        return this._IBANcode;
    }
    public set IBANcode(value: string) {
        this._IBANcode = value;
    }
    public get paymentStatus(): string {
        return this._paymentStatus;
    }
    public set paymentStatus(value: string) {
        this._paymentStatus = value;
    }
    public get cashedByBrand(): string {
        return this._cashedByBrand;
    }
    public set cashedByBrand(value: string) {
        this._cashedByBrand = value;
    }
    public get commissionAgent(): string {
        return this._commissionAgent;
    }
    public set commissionAgent(value: string) {
        this._commissionAgent = value;
    }
    public get agent(): string {
        return this._agent;
    }
    public set agent(value: string) {
        this._agent = value;
    }

    toJSon() {
        return {

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
        }
    }
}