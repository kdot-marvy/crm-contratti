import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SignupUserModel } from '../../admin/models/signupUser.model';
import { map } from 'rxjs/operators';
import { LoginUserModel } from '../models/loginUser.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // holds the current user  notify other components when the user object is changed
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(loginUser: LoginUserModel) {

    const headers = new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8'
    });


    return this.http.post<any>(`${environment.apiUrl}/api/auth/signin`, loginUser.toJSon(), {headers: headers})
    .pipe(map((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

  signup(signupUser: SignupUserModel) {
    return this.http.post(`${environment.apiUrl}/api/auth/signup`, signupUser.toJSon());
  }


}
