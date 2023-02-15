import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private http: HttpClient){}

  

  saveData(){
    let usernameValue = (<HTMLInputElement>document.getElementById('username')).value
    let emailValue = (<HTMLInputElement>document.getElementById('email')).value
    let passwordValue = (<HTMLInputElement>document.getElementById('inputPassword')).value
    let data = {username: usernameValue, email: emailValue, password: passwordValue}

    localStorage.setItem('Data', (JSON.stringify(data)))
  }
}
