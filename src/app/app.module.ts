import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DbConnectService } from './service/db-connect.service';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ErrorComponent } from './error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { OwlModule } from 'ngx-owl-carousel';
import { CardcheckComponent } from './cardcheck/cardcheck.component';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { CardsWorkCheckComponent } from './cards-work-check/cards-work-check.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexCheckComponent } from './flex/flex-check/flex-check.component';
import { MatloginComponent } from './material/matlogin/matlogin.component';
import { MatSelectModule } from '@angular/material/select'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakedbService } from './service/fakedb/fakedb.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonalInfoComponent,
    ErrorComponent,
    LogoutComponent,
    HomeComponent,
    CardcheckComponent,
    AskquestionComponent,
    CardsWorkCheckComponent,
    FlexCheckComponent,
    MatloginComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule,
    OwlModule,
    JwtModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,



  ],
  providers: [DbConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
