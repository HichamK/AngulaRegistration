import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  hide: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(UserName: string, Password: string){
    console.log("Bienvenue: " + UserName);
  }
}
