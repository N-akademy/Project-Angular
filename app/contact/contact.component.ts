import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Sender } from '../models/sender';
import { SenderService } from '../services/sender.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit  {

  sform!: FormGroup;


  constructor(
      private formBuilder: FormBuilder,
      private senderService: SenderService,
      private router: Router
  ) { }

  ngOnInit() {
    this.initForm();

  }

  initForm(){
    this.sform = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      comment: ['', Validators.required]
  });
  }

  onSubmit() {
      const formValue = this.sform.value;
      const newSender = new Sender(
      
         formValue['fullName'],
         // tslint:disable-next-line: no-string-literal
         formValue['email'],
         // tslint:disable-next-line: no-string-literal
         formValue['comment'],
    );
    // tslint:disable-next-line: align
    this.senderService.addSender(newSender);
      this.router.navigate(['/sender']);
  }
}
