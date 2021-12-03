import { User } from '../models/user.model';
import { Subject } from 'rxjs/internal/Subject';

export class UserService {
  private us: User[] = [];
  userSubject = new Subject<User[]>();

    // tslint:disable-next-line: typedef
    emitUsers() {
    this.userSubject.next(this.us.slice());
  }

  addUser(us: User) {
    this.us.push(us);
    this.emitUsers();
  }
}
