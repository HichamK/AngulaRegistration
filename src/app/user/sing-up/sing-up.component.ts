import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/finally';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  user : User;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: boolean = true;
  disableAfterSend : boolean = false;

  constructor(private userService: UserService, private toaster: ToastrService) {}

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    this.resetForm();
  }

  registerUser() {
    console.log(this.user);
    this.disableAfterSend = true;

    this.userService.registerUser(this.user).finally(() => {
      this.disableAfterSend = false;
    }).subscribe(
      data => {
        if(data.Succeeded == true)
        {
          this.toaster.success('User created successfully');
          this.resetForm();
        }
        else
        {
          this.toaster.error(data.Errors[0]);
        }
      },
      err => {
        let errorMessage: string;

        if (err.error instanceof Error) {
          errorMessage = "Client-side error occured.";
        } else {
          errorMessage = "Server-side error occured.";
        }
        this.toaster.error(errorMessage);
        
      });
    
  }

  resetForm(form?: NgForm) {
    if(form) {
     form.reset();
     this.toaster.info("Form has been successfully reset");
    }
    this.user = {
      UserName: '',
      Password: '',
      FirstName : '',
      LastName : '',
      Email : '',
      Gender : '',
      Titre : '',
    }
  }
}