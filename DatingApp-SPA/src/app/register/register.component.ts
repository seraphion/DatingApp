import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = { };

  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private alertService: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertService.success('Registration successfull');
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
