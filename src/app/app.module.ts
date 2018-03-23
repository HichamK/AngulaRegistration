import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }