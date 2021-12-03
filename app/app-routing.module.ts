import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent} from './home/home.component';
import { OhnoComponent} from './ohno/ohno.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewuserComponent } from './newuser/newuser.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SenderListComponent } from './sender-list/sender-list.component';
import { JobComponent } from './job/job.component';
import { LearnComponent } from './learn/learn.component';
import { ProjectComponent } from './project/project.component';

import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sender', component: SenderListComponent},
  { path: 'job', component: JobComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: OhnoComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewuserComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
