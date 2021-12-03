import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean | undefined;

  constructor(private aS: AuthService, private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.authStatus = this.aS.isAuth;
  }

  // tslint:disable-next-line: typedef
  onSignIn() {
    this.aS.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.aS.isAuth;
        this.router.navigate(['']);
      }
    );
  }

  // tslint:disable-next-line: typedef
  onSignOut() {
    this.aS.signOut();
    this.authStatus = this.aS.isAuth;
  }

}
