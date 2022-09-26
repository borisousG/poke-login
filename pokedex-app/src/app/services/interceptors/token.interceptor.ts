import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>  {
    const token:string = '== Hola Interceptor ==';

    if (token == '') {
      return next.handle(request);
    }

    const headersRequest : HttpRequest<any> = request.clone({
      headers: request.headers
        .set('Authorization', `Bearer ${token}`)
    });

    // return next.handle(headersRequest).pipe(
    //   catchError((err: HttpErrorResponse) => {

    //     if (err.status === 401) {
    //       this.router.navigateByUrl('/login');
    //     }

    //     return throwError( err );

    //   })
    // );

    return next.handle(headersRequest);

    // return from (DigestHeaderService.add(headers, Constants.ENDPOINT.KEY, Constants.ENDPOINT.IV))
    // .pipe(
    //   switchMap(headers_digest => {
    //     return next.handle(headers_digest);
    //   })
    // );

  }
}
