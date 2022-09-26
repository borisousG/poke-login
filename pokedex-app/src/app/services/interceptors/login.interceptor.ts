import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Buffer } from 'buffer';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {
    console.log('LoginInterceptor');
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const USER_NAME : string = localStorage.getItem('userName')?.toString() ?? '';
    const PASSWORD : string = localStorage.getItem('password')?.toString() ?? '';

    const TOKEN : string = `Basic ${ Buffer.from(USER_NAME +':'+ PASSWORD).toString('base64') }`;
    
    const HEADERS : HttpRequest<any> = request.clone({
      headers: request.headers
        .set('Authorization', TOKEN)
    });

    console.log(HEADERS);

    return next.handle(HEADERS);
  }
}
