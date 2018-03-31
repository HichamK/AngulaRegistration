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
    { routerLink : '.', icon : 'home', title : 'Home'},
    { routerLink : 'account', icon : 'perm_identity', title : 'Account'},
    { routerLink : 'settings', icon : 'settings_applications', title : 'Settings'},
    { routerLink : '.', icon : 'history', title : 'History'},
    { routerLink : '.', icon : 'report_problem', title : 'Report problem'},
    { routerLink : '.', icon : 'help', title : 'Help'},
    { routerLink : '.', icon : 'feedback', title : 'Send feedback'},
    { icon : 'exit_to_app', title : 'Sign out'},
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
