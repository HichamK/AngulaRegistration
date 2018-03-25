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

    return this.http.post(this.rootUrl + "/api/Account/Register", body)
    .catch(this.handleError);
  }

  userAuthentification(userName, password){
    let data = "username=" + userName + "&password=" + password + "&grant_type=password";
    let header = new HttpHeaders({'Content-Type' : 'application/x-www-urlencoded'});

    return this.http.post(this.rootUrl + "/token", data, {headers : header});
  }

  handleError(err: HttpErrorResponse) {
    return new ErrorObservable(err.error);
  }
}
