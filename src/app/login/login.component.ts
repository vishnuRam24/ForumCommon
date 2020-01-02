import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from '../Model/loginModel';
import { DbConnectService } from '../service/db-connect.service';
import * as CryptoJS from 'crypto-js';
import { EncryptService } from '../encryption/encrypt.service';
import { Router } from '@angular/router';
import { datasType } from '../Model/dbModel';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginModel: Login;
  jwtToken: string;


  userFiles: datasType;

  userData: datasType[];





  constructor(private dbService: DbConnectService, private secure: EncryptService, private route: Router,
  ) { }

  ngOnInit() {
    localStorage.clear();

    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });





    // 0 is having 4 communites and 1 is having 2

    this.userData = [{
      // tslint:disable-next-line: max-line-length
      id: '1', name: 'vishnu', age: '22', email: 'vishnuram@local.com', country: 'IN', location: 'CHN', timezone: 'GMT+5.30', communitiesFollowed: 'java;Mysql;Oracle;SpringBoot',
      // tslint:disable-next-line: max-line-length
      totalQuestions: 4, interestedAreas: 'java,mysql,springboot', totalAnswered: 10, skills: 'Hacking,python,java', joinedOn: '24-03-1997', carrier: 'Software Developer'
    }, {
      // tslint:disable-next-line: max-line-length
      id: '2', name: 'vishnu', age: '22', email: 'vishnuram@local.com', country: 'IN', location: 'CHN', timezone: 'GMT+5.30', communitiesFollowed: 'java;Mysql',
      // tslint:disable-next-line: max-line-length
      totalQuestions: 4, interestedAreas: 'java,mysql,springboot', totalAnswered: 10, skills: 'Hacking,python,java', joinedOn: '24-03-1997', carrier: 'Software Developer'
    }
    ];

  }

  onSubmit() {
    // console.log('submit is working');
    this.loginModel = this.loginForm.value;


    console.log(this.loginModel.password);


    // For encryption
    // this.encryptedPassword = this.secure.encrypt(this.loginModel.password);

    // console.log('Encrypted password is ' + this.encryptedPassword);

    // this.loginModel.password = this.encryptedPassword;

    console.log(this.userData[1].communitiesFollowed);

    // this.seperateCommunities(this.userData[0].communitiesIn);
    // console.log(this.userData[0]);

    // this.shareService.setMsg(this.userData[0]);

    // this.userFiles = this.userData[0];

    // this.encryptedStorageData = this.secure.encrypt(this.userFiles);

    localStorage.setItem('data', JSON.stringify(this.userData[1]));





    // console.log('Login Model->' + this.loginModel.password);
    // console.log(this.loginModel);

    // For decryption
    // this.decryptedPassword = this.secure.decrypt(this.encryptedPassword);

    // console.log('Decryped password' + this.decryptedPassword);



    // To access the Api end point

    this.dbService.login(this.loginModel).subscribe(response => {
      console.log('Success Response');
      console.log(JSON.stringify(response).substring(8));
      localStorage.setItem('AccessToken', JSON.stringify(response).slice(8, 140));
      this.route.navigate(['/personal-info']);
    },
      error => {
        console.log('Error Response');
        console.log(error.error);
        console.log(error);
      });

    // if (this.loginModel.username === 'vishnu' && this.loginModel.password === 'vishnu') {
    //   this.route.navigate(['home']);
    // }

  }
  // seperateCommunities(data: string) {
  //   console.log('this is in the sepertate Communities Method');
  //   this.communities = data.split(';');
  //   console.log(this.communities);

  // }

}
