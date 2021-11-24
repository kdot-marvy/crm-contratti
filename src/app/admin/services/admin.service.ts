import { Manager } from './../models/manager.model';
import { ContractModel } from './../models/contract.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { SignupUserModel } from '../models/signupUser.model';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'app/shared/services/authentication.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  managerUrl = '/api/managers';
  packageUrl = '/api/packages';

  contractUrl = '/api/contracts';
  userUrl = '/api/users';
  allegatiUrl = '/api/file';
  private currentUser;


  constructor(private http: HttpClient, private toastr: ToastrService, private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  showToast(type,msg) {

    if (type === 'S') {
      this.toastr.success(msg, 'successo');
    }else if(type === 'E'){
      this.toastr.error(msg, 'Errore', {
        timeOut: 3000,
      });
    }
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

  addManager(managerDetails: Manager) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
      });

    return this.http.post(`${environment.apiUrl}` + this.managerUrl, managerDetails.toJSon(), {headers : headers});
  }


  // Contracts endPoints
  getAllContracts(pagination){

    let finalUrl = `${environment.apiUrl}` + this.contractUrl;
    if(this.currentUser.roles[0] === "ROLE_ADMIN"){
      finalUrl += "/admin";
    }else{
      finalUrl += "/user"+this.currentUser.id;
    }
    return this.http.get(finalUrl+pagination);

  }

  deleteContract(id){
    return this.http.delete(`${environment.apiUrl}` + this.contractUrl + '/' + id);

  }
  getContract(contractId) {
    return this.http.get(`${environment.apiUrl}` + this.contractUrl + '/' + contractId);
  }

  updateContract(id,contractDetails: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
      });

    return this.http.put(`${environment.apiUrl}` + this.contractUrl + '/' + id, contractDetails.getRawValue(), {headers : headers});
  }

  addContract(contractDetails: ContractModel) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });

      console.log(JSON.stringify(contractDetails), typeof(JSON.stringify(contractDetails)));

    return this.http.post(`${environment.apiUrl}` + this.contractUrl,  JSON.stringify(contractDetails), {headers : headers});

  }

  public getJSON(jsonURL: string) {
    return this.http.get(jsonURL);
  }

  public getGestori() {
    return this.http.get('assets/js/gestori.json');
  }

  getContructPager(params: any){

  }

  //users

  deleteUser(){
    return this.http.delete(`${environment.apiUrl}` + this.userUrl);
  }

  addUser(userDetails: SignupUserModel) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8'
      });

    return this.http.post(`${environment.apiUrl}` + this.userUrl, userDetails.toJSon(), {headers : headers});
  }

  exportExcel() {

    return this.http.get(`${environment.apiUrl}` + this.contractUrl + '/export/excel', {
      observe: 'response',
      responseType: 'blob'
    })
  }

  uploadFile(file,contractId){

    const formData: FormData = new FormData();

    formData.append('file', file);

    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
      });

    return this.http.post(`${environment.apiUrl}` + this.allegatiUrl + '/upload/' + contractId, formData, {headers : headers});


    // const req = new HttpRequest('POST', `${environment.apiUrl}` + this.allegatiUrl + '/upload/' + contractId, formData, {
    //   reportProgress: true,
    //   Content-Type: 'multipart/form-data'
    // });

    // return this.http.request(req);
  }

  userRole(): any{
    return this.currentUser.roles[0];
  }

  getPackagesById(managerId){

    return this.http.get(`${environment.apiUrl}` + this.packageUrl + '/' + managerId);

  }

  getPackages(){

    return this.http.get(`${environment.apiUrl}` + this.packageUrl);

  }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.apiUrl}` + this.allegatiUrl + '/files');
  }

}
