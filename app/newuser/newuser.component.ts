import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {

  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  // tslint:disable-next-line: typedef
  initForm(){
    this.userForm = this.formBuilder.group({
      id: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
    });
  }

  // tslint:disable-next-line: typedef
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      // tslint:disable-next-line: no-string-literal
      formValue['id'],
      // tslint:disable-next-line: no-string-literal
      formValue['username'],
      // tslint:disable-next-line: no-string-literal
      formValue['password'],
      // tslint:disable-next-line: no-string-literal
      formValue['firstName'],
      // tslint:disable-next-line: no-string-literal
      formValue['lastName'],
      // tslint:disable-next-line: no-string-literal
      formValue['email'],

    );
    this.userService.addUser(newUser);
    this.route.navigate(['/users']);
  }

}
