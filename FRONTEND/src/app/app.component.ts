import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet - Application Angular';

  constructor(private loginService: LoginService, private router:Router) { }

  loginForm = new FormGroup({
    login: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  isLoged = false;

  onSubmit() {
    if(this.loginForm.value.login != "" && this.loginForm.value.password != "") {
      this.loginService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe(
        (data) => {
          console.log(data);
          this.isLoged = true;
          alert('Vous êtes connecté !');
          this.router.navigateByUrl('home');
        }
      );
    }
  }

  onCreate(){
    if(this.loginForm.value.login != "" && this.loginForm.value.password != "") {
      this.loginService.signup(this.loginForm.value.login, this.loginForm.value.password).subscribe(
        (data) => {
          console.log(data);
          this.isLoged = true;
          alert('Vous vous êtes enregsitré !');
          this.router.navigateByUrl('home');
        }
      );
    }
  }
}
