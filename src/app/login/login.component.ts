import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private loginService: LoginService, private router:Router) { }

  ngOnInit() {
  }

  Cancel() {
    this.username = '';
    this.password = '';
    this.router.navigate(['/home']);
  }

  Login() {
    this.loginService.Logon(this.username, this.password);
    this.username = '';
    this.password = '';
    this.router.navigate(['/home']);
  }

}
