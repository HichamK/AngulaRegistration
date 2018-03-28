import { Routes } from "@angular/Router";
import { SignInComponent } from "../user/sign-in/sign-in.component";
import { SingUpComponent } from "../user/sing-up/sing-up.component";
import { HomeComponent } from "../home/home.component";
import { UserComponent } from "../user/user.component";
import { AuthGuard } from "../auth/auth.guard";
import { AccountComponent } from "../account/account.component";

export const routes : Routes = [
    { path: 'home', component: HomeComponent, canActivate : [AuthGuard],
      children: [
        //{path: '', redirectTo: 'account', pathMatch : 'full'}, 
        {path: 'account', component: AccountComponent}, 
        ]
    },
    { path : 'user', component : UserComponent},
    { path : '', redirectTo: '/user', pathMatch : 'full'},
    { path : '**', redirectTo: '/user'},
];