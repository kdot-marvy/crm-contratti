export class AddressData {

    //Personal Data Address
    private _addressType: string;
    private _address: string;
    private _addressNumber: string;
    private _zipCode: string;
    private _location: string;

    //Plant Location Address (Manager Data)
    private _plantLocationAddressType: string;
    private _plantLocationAddress: string;
    private _plantLocationAddressNumber: string;
    private _plantLocationAddressZipCode: string;
    private _plantLocationAddressLocation: string;

    //Shipping Address (Manager Data)
    private _shippingAddressType: string;
    private _shippingAddress: string;
    private _shippingAddressNumber: string;
    private _shippingAddressZipCode: string;
    private _shippingAddressLocation: string;

    constructor() {

        //Personal Data Address
        this._addressType = '';
        this._address = '';
        this._addressNumber = '';
        this._zipCode = '';
        this._location = '';

        //Plant Location Address (Manager Data)
        this._plantLocationAddressType = '';
        this._plantLocationAddress = '';
        this._plantLocationAddressNumber = '';
        this._plantLocationAddressZipCode = '';
        this._plantLocationAddressLocation = '';

        //Shipping Address (Manager Data)
        this._shippingAddressType = '';
        this._shippingAddress = '';
        this._shippingAddressNumber = '';
        this._shippingAddressZipCode = '';
        this._shippingAddressLocation = '';
    }

    //Personal Data Address
    public get addressType(): string {
        return this._addressType;
    }
    public set addressType(value: string) {
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


    //Plant Location Address (Manager Data)
    public get plantLocationAddressType(): string {
        return this._plantLocationAddressType;
    }
    public set plantLocationAddressType(value: string) {
        this._plantLocationAddressType = value;
    }
    public get plantLocationAddress(): string {
        return this._plantLocationAddress;
    }
    public set plantLocationAddress(value: string) {
        this._plantLocationAddress = value;
    }
    public get plantLocationAddressNumber(): string {
        return this._plantLocationAddressNumber;
    }
    public set plantLocationAddressNumber(value: string) {
        this._plantLocationAddressNumber = value;
    }
    public get plantLocationAddressZipCode(): string {
        return this._plantLocationAddressZipCode;
    }
    public set plantLocationAddressZipCode(value: string) {
        this._plantLocationAddressZipCode = value;
    }
    public get plantLocationAddressLocation(): string {
        return this._plantLocationAddressLocation;
    }
    public set plantLocationAddressLocation(value: string) {
        this._plantLocationAddressLocation = value;
    }

    //Shipping Address (Manager Data)
    public get shippingAddressType(): string {
        return this._shippingAddressType;
    }
    public set shippingAddressType(value: string) {
        this._shippingAddressType = value;
    }
    public get shippingAddress(): string {
        return this._shippingAddress;
    }
    public set shippingAddress(value: string) {
        this._shippingAddress = value;
    }
    public get shippingAddressNumber(): string {
        return this._shippingAddressNumber;
    }
    public set shippingAddressNumber(value: string) {
        this._shippingAddressNumber = value;
    }
    public get shippingAddressZipCode(): string {
        return this._shippingAddressZipCode;
    }
    public set shippingAddressZipCode(value: string) {
        this._shippingAddressZipCode = value;
    }
    public get shippingAddressLocation(): string {
        return this._shippingAddressLocation;
    }
    public set shippingAddressLocation(value: string) {
        this._shippingAddressLocation = value;
    }


    toJSon() {
        return {
            //Personal Data Address
            addrressType: this._addressType,
            address: this._address,
            addressNumber: this._addressNumber,
            zipCode: this._zipCode,
            location: this._location,

            //Plant Location Address (Manager Data)
            plantLocationAddressType: this._plantLocationAddressType,
            plantLocationAddress: this._plantLocationAddress,
            plantLocationAddressNumber: this._plantLocationAddressNumber,
            plantLocationAddressZipCode: this._plantLocationAddressZipCode,
            plantLocationAddressLocation: this._plantLocationAddressLocation,

            //Shipping Address (Manager Data)
            shippingAddressType: this._shippingAddressType,
            shippingAddress: this._shippingAddress,
            shippingAddressNumber: this._shippingAddressNumber,
            shippingAddressZipCode: this._shippingAddressZipCode,
            shippingAddressLocation: this._shippingAddressLocation
        }
    }
}