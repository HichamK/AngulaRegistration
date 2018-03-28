import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userClaims : any;

  constructor(private userService : UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getUserClaims();
  }

  getUserClaims(){
    this.userService.getUserClaims().subscribe(
      data => {
        this.userClaims = data;
      },
      err => {
        this.toastr.error("Error when get user claims");
      }
    );
  }
}
