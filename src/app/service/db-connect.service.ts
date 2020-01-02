import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../Model/loginModel';

@Injectable({
  providedIn: 'root'
})
export class DbConnectService {

  constructor(private http: HttpClient) { }

  // ggg() {

  //   const jwt = localStorage.getItem('AccessToken');

  //   const header = new HttpHeaders({ Authorization: 'Bearer ' + jwt });

  //   return this.http.get('http://localhost:8080/welcome', { headers: header });
  // }

  login(userData: Login) {
    // console.log(userData);
    console.log(userData);

    // const headers = this.headerCreation(userData);

    // const header = new HttpHeaders({ Authorization: headers });

    return this.http.post('http://localhost:8080/authenticate', userData);


    // return this.http.post<Login>('http://192.168.30.154:8080/api/users', userData);
    // return this.http.post<Login>('http://localhost:8080/authenticate', userData, { headers: header });
  }

  // headerCreation(userData: Login) {
  //   const uname = userData.username;
  //   const pass = userData.password;

  //   const headers = 'Basic ' + window.btoa(uname + ':' + pass);
  //   return headers;
  // }
}

