import { PersonalData } from 'app/admin/models/personalData';
import { ManagerData } from 'app/admin/models/managerData';
import { AccountingData } from 'app/admin/models/accountingData';
import { AddressData } from 'app/admin/models/addressData';

export class ContractModel {

  private _personalData: PersonalData;
  private _managerData: ManagerData;
  private _accountingData: AccountingData;
  private _addressData: AddressData;

  constructor() {
    this.personalData = new PersonalData;
    this.managerData = new ManagerData;
    this.accountingData = new AccountingData;
    this.addressData = new AddressData;
  }

  public get personalData(): PersonalData {
    return this._personalData;
  }
  public set personalData(value: PersonalData) {
    this._personalData = value;
  }
  public get managerData(): ManagerData {
    return this._managerData;
  }
  public set managerData(value: ManagerData) {
    this._managerData = value;
  }
  public get accountingData(): AccountingData {
    return this._accountingData;
  }
  public set accountingData(value: AccountingData) {
    this._accountingData = value;
  }
  public get addressData(): AddressData {
    return this._addressData;
  }
  public set addressData(value: AddressData) {
    this._addressData = value;
  }

  toJSon() {
    return {};
  }

}

