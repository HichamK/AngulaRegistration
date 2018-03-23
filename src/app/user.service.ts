import { Injectable } from '@angular/core';
import { User } from './Models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/catch';

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

  handleError(err: HttpErrorResponse) {
    return new ErrorObservable(err.error);
  }
}
