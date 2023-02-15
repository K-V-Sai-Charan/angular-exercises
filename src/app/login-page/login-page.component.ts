import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  user: any

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])

  })

  constructor(private http: HttpClient, private router: Router) { }


  invalidCredentials : boolean = false

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  onClickSignIn() {
        this.http.get<any>('http://localhost:3000/signup').subscribe(result=>{

          this.user = result.find((element:any) => {
            return (element.email == this.loginForm.value.email && element.password == this.loginForm.value.password)
          })

          if(this.user != null){

            localStorage.setItem("token", "anflherfkdbfkjhbuyjhdfhgjhjjhgffdfdgfhjhhfgfhgfgfhkjkjjjhh")

            localStorage.setItem("Username", this.user.username)
            this.loginForm.reset();
            this.router.navigate(['home'])
          }
          else{
            this.invalidCredentials = true
          }

    } )

  
  }

}
