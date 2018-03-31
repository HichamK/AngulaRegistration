import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/catch';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  rootUrl: string = "http://localhost:56504";
  
  constructor(private http: HttpClient) { }

  registerUser(user: User){
    let body : User = {
      UserName : user.UserName,
      Password : user.Password,
      FirstName : user.FirstName,
      LastName : user.LastName,
      Email: user.Email,
      Gender: user.Gender,
      Titre: user.Titre,
    }

    let reqHeader = new HttpHeaders({'No-Auth' : 'True'});
    return this.http.post(this.rootUrl + "/api/Account/Register", body, { headers : reqHeader})
    .catch(this.handleError);
  }

  userAuthentification(userName, password){
    let data = "username=" + userName + "&password=" + password + "&grant_type=password";
    let header = new HttpHeaders({'Content-Type' : 'application/x-www-urlencoded', 'No-Auth' : 'True'});
 
    return this.http.post(this.rootUrl + "/token", data, {headers : header});
  }

  getUserClaims(){
    return this.http.get(this.rootUrl + "/api/account/GetUserClaims");
  }

  getAllUsers(){
    return this.http.get<User[]>(this.rootUrl + '/api/account/GetUsers');
  }

  deleteUser(userId : string){
    return this.http.delete(this.rootUrl + '/api/Account/DeleteUser?userId=' + userId);
  }

  handleError(err: HttpErrorResponse) {
    return new ErrorObservable(err.error);
  }
}
