import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = { };
  loggedInUsername: string;

  constructor(private authService: AuthService, private alertService: AlertifyService) { }

  ngOnInit() {
    this.loggedInUsername = this.authService.getLoggedInUsername();
  }

  login() {
    this.authService.login(this.model).subscribe(
      () => {
        this.loggedInUsername = this.authService.getLoggedInUsername();
        this.alertService.success('Logged in successfully');
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertService.message('Logged out');
  }
}
