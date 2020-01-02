// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class InterceptService implements HttpInterceptor {


//   constructor() { }

//   intercept(request: HttpRequest<any>, next: HttpHandler) {
//     let uname = 'vishnu';
//     let pass = 'vishnu';

//     let headers = 'Basic ' + window.btoa(uname + ':' + pass);
//     // return headers;
//     let requestMod = request.clone({ setHeaders: { Authorization: headers } });
//     return next.handle(requestMod);


//   }
// }
