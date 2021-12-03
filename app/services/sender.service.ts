import { HttpClient } from '@angular/common/http';
import { Sender } from '@app/_models/sender';
import { Subject } from 'rxjs';

export class SenderService{

    private senders = [
        {
          id: 1,
          fullName: 'nono',
          email: 'norhen.ben@gmail.com',
          comment: 'bonjour moi'
        }
    ];

    senderSubject = new Subject<Sender[]>();

    emitSender(){
        this.senderSubject.next(this.senders.slice());
    }
    addSender(senders: Sender){
        this.senders.push(Sender[''] );
        this.emitSender();
    }

    constructor(private httpClient: HttpClient) { }

}
