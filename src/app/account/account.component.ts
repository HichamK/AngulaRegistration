import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnChanges {

  @Input() selectedUser : User;
  userClaims : any;

  constructor(private userService : UserService, private toastr: ToastrService) { }

  ngOnInit() {
    if(this.selectedUser == null){
      this.getUserClaims();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {  
    if(this.selectedUser != null){
      this.userClaims = this.selectedUser;
    }
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
