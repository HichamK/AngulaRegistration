import { Component } from '@angular/core';
import * as Rx from 'rxjs';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 constructor(private router : Router){
      const observable: Rx.Observable<any> = Rx.Observable.merge(
      Rx.Observable.fromEvent(document,'keydown'),
      Rx.Observable.fromEvent(document,'click'),
      Rx.Observable.fromEvent(document,'mousemove'),
      Rx.Observable.fromEvent(document,'scroll'),
      Rx.Observable.fromEvent(document,'touchstart')
    );

    //Logout when the user hasn't done anything for a period of 10 minutes
    const eventObservable = observable.bufferTime(6000*100)
    .filter(function(arr) {
      return arr.length == 0;
    })
    .subscribe(event => this.logOut());
  }

  logOut(){
    localStorage.removeItem("userToken");
    this.router.navigate(['/user']);
  }

  title = 'app';
}
