import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('intercepted request ... ');
    const authReq = req.clone({
      setHeaders: {
        'app-id': environment.APP_ID
      }
    });

    return next.handle(authReq);
  }
}