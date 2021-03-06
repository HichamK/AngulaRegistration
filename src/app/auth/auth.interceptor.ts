import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Router } from "@angular/Router";
import "rxjs/add/operator/do";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router : Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('No-Auth') == "True"){
            return next.handle(req.clone());
        }

        if(localStorage.getItem("userToken") != null){
            const clonedReq = req.clone(
                {
                    headers : req.headers.set('Authorization', 'Bearer ' + localStorage.getItem("userToken"))
                });
            return next.handle(clonedReq)
            .do(
                succ => {},
                err => {
                    if(err.status === 401)
                        this.router.navigateByUrl('/user');
                }
            );
        }
        else{
            this.router.navigateByUrl('/user');
        }
    }
}