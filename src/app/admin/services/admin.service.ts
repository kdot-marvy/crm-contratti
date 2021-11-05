import { ContractModel } from 'app/admin/models/contract.model';

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  managerUrl = '/api/managers';
  contractUrl = '/api/contracts';

  constructor(private http: HttpClient) {
  }


  // Managers endPoints
  getAllManagers() {
    return this.http.get(`${environment.apiUrl}` + this.managerUrl);
  }

  deleteManager(){
    return this.http.delete(`${environment.apiUrl}` + this.managerUrl);
  }

  getManager(managerId) {
    return this.http.get(`${environment.apiUrl}` + this.managerUrl + '/' + managerId);
  }

  updateManager(managerId, managerDetails: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
      });

    return this.http.put(`${environment.apiUrl}` + this.managerUrl + '/' + managerId, managerDetails, {headers : headers});
  }

  addManager(managerId, managerDetails: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
      });

    return this.http.put(`${environment.apiUrl}` + this.managerUrl + '/' + managerId, managerDetails, {headers : headers});
  }


  // Contracts endPoints
  getAllContracts(){
    return this.http.get(`${environment.apiUrl}` + this.contractUrl);
  }
  deleteContract(){
    return this.http.delete(`${environment.apiUrl}` + this.contractUrl);

  }
  getContract(contractId) {
    return this.http.get(`${environment.apiUrl}` + this.contractUrl + '/' + contractId);
  }

  updateContract(contractId, contractDetails: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
      });

    return this.http.put(`${environment.apiUrl}` + this.contractUrl + '/' + contractId, contractDetails, {headers : headers});
  }

  addContract(contractDetails: ContractModel) {

    console.log(contractDetails.toJSon());
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
      });

    return this.http.post(`${environment.apiUrl}` + this.contractUrl, contractDetails.toJSon(), {headers : headers});
  }

  public getJSON(jsonURL: string) {
    return this.http.get(jsonURL);
  }

  public getGestori() {
    return this.http.get('assets/js/gestori.json');
  }

}
