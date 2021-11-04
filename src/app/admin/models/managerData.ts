export class ManagerData {

    private _manager: string;
    private _package: string;
    private _coverage: string;
    private _additionalOptions: string;
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
    private _pod: string;
    private _pdr: string;
    private _serialNumber: string;
    private _previousSupplier: string;

   

    constructor() {

        this._manager = '';
        this._package = '';
        this._coverage = '';
        this._additionalOptions = '';
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
        this._pod = '';
        this._pdr = '';
        this._serialNumber = '';
        this._previousSupplier = '';
    }

    public get manager(): string {
        return this._manager;
    }
    public set manager(value: string) {
        this._manager = value;
    }

    public get package(): string {
        return this._package;
    }
    public set package(value: string) {
        this._package = value;
    }
    public get coverage(): string {
        return this._coverage;
    }
    public set coverage(value: string) {
        this._coverage = value;
    }
    public get additionalOptions(): string {
        return this._additionalOptions;
    }
    public set additionalOptions(value: string) {
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
    public get pod(): string {
        return this._pod;
    }
    public set pod(value: string) {
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

    toJSon() {
        return {

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
        }
    }

}