import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SingUpComponent } from './user/sing-up/sing-up.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { UserService } from './shared/services/user.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/Router';
import { routes } from './shared/routeConfig';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavContainer } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
    SignInComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [UserService, MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
