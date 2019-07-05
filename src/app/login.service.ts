import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: User;

  constructor() { }

  Logon(username: string, password: string) {
    if (username  && password) {
      console.log(username + password);
      this.user = new User(username, password);
    }
  }

  Logout() {
    this.user = undefined;
  }

  GetUser(): User {
    return this.user;
  }
}
