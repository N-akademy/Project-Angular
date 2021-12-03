import { Component, OnDestroy, OnInit } from '@angular/core';
import { Sender } from '@app/_models/sender';
import { SenderService } from '@app/_services/sender.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sender-list',
  templateUrl: './sender-list.component.html',
  styleUrls: ['./sender-list.component.less']
})
export class SenderListComponent implements OnInit, OnDestroy {
  senders: Sender[];
  senderSubscription: Subscription;
  constructor(private senderService: SenderService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.senderSubscription = this.senderService.senderSubject.subscribe(
      (senders: Sender[]) => {
        this.senders = senders;
      }
    );
    this.senderService.emitSender();
  }
  ngOnDestroy(){
    this.senderSubscription.unsubscribe();
  }
}
