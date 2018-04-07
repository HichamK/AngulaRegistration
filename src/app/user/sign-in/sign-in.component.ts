import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/Router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide: boolean = true;
  disableAfterSend : boolean = false;
  returnUrl : string;

  constructor(private userService: UserService, private router: Router, 
              private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    //Get return url from route parameters or default to home page
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
 
  onSubmit(userName: string, password: string){
    this.disableAfterSend = true;
    
    this.userService.userAuthentification(userName, password).finally(() => {
      this.disableAfterSend = false;
    }).subscribe(
      (data :  any) => {
        localStorage.setItem("userToken", data.access_token);
        localStorage.setItem("fullName", data.fullname);
        this.router.navigateByUrl(this.returnUrl);
      },
      err => {
        this.toastr.error("There were one or more errors in your submission. Please correct the marked fields below.");
      }
    );
  }
}
