import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppMenu } from '../shared/models/app-menu.model';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  readonly fullName : string = localStorage.getItem("fullName");

  readonly appMenu : Array<AppMenu> = [
    { routerLink : '.', icon : 'home'},
    { routerLink : 'account', icon : 'perm_identity'},
    { routerLink : '.', icon : 'receipt'},
    { routerLink : '.', icon : 'timeline'},
    { routerLink : '.', icon : 'turned_in'},
    { routerLink : '.', icon : 'report_problem'},
    { routerLink : '.', icon : 'help'},
    { icon : 'exit_to_app'},
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router : Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem("userToken");
    this.router.navigate(['/user']);
  }
}
