import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { CardcheckComponent } from './cardcheck/cardcheck.component';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { CardsWorkCheckComponent } from './cards-work-check/cards-work-check.component';
import { FlexCheckComponent } from './flex/flex-check/flex-check.component';
import { MatloginComponent } from './material/matlogin/matlogin.component';
import { PostFilesComponent } from './post-files/post-files.component';
import { DisplayFileComponent } from './display-file/display-file.component';




const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'home', component: HomeComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'cardcheck', component: CardcheckComponent },
  { path: 'ask', component: AskquestionComponent },
  { path: 'abcdef', component: CardsWorkCheckComponent },
  { path: 'flex', component: FlexCheckComponent },
  { path: 'mat-login', component: MatloginComponent },
  

  // jack
  { path: 'post-files', component: PostFilesComponent },
  { path: 'display-files', component: DisplayFileComponent },

  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
