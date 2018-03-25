import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/Router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide: boolean = true;

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(userName: string, password: string){
    this.userService.userAuthentification(userName, password).subscribe(
      (data :  any) => {
        localStorage.setItem("userToken", data.access_token);
        this.router.navigate(['/home']);
      },
      err => {
        this.toastr.error(err.statusText);
      }
    );
  }
}
