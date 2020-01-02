import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as $ from 'jquery';
import { Subscription, Subject } from 'rxjs';

import { datasType } from '../Model/dbModel';
import { EncryptService } from '../encryption/encrypt.service';
import { DbConnectService } from '../service/db-connect.service';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']

})
export class PersonalInfoComponent implements OnInit {

  personalInfo: FormGroup;
  subscription: Subscription;

  data: any;
  communities: string[];


  constructor(private encrypt: EncryptService, private dbService: DbConnectService) {

  }

  ngOnInit() {

    console.log(localStorage.getItem('AccessToken'));

    this.data = JSON.parse(localStorage.getItem('data'));

    console.log(this.data);

    this.personalInfo = new FormGroup({

      name: new FormControl(this.data.name),
      totalQuestions: new FormControl(this.data.totalQuestions),
      interestedAreas: new FormControl(this.data.interestedAreas),
      communitiesFollowed: new FormControl(this.data.communitiesFollowed),
      totalAnswered: new FormControl(this.data.totalAnswered),
      skills: new FormControl(this.data.skills),
      joinedOn: new FormControl(this.data.joinedOn),
      carrier: new FormControl(this.data.carrier)

    });
    this.communitiesSeperation(this.data.communitiesFollowed);

  }
  communitiesSeperation(data: string) {
    this.communities = data.split(";");
    console.log('Communities Followed By this user is ->' + this.communities);

    console.log(this.communities);

  }
  // callWelcome() {
  //   this.dbService.ggg().subscribe((response) => console.log(response));

  // }


}
