import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user.model';

import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users = [
    new User('', '', '', '', '', '')];

  usSub!: Subscription;

  constructor(private userService: UserService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.usSub = this.userService.userSubject.subscribe(
      (user: User[]) => {
        this.users = user;
      }
    );
    this.userService.emitUsers();
  }



  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.usSub.unsubscribe();
  }

}
