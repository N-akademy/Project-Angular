import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { OhnoComponent } from './ohno/ohno.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewuserComponent } from './newuser/newuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    OhnoComponent,
    UserListComponent,
    NewuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,
              UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
