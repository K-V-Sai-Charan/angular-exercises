import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public data : any

  registered : boolean = false
  notRegistered : boolean = false

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() { }

  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*')]),
    mobile: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
    email: new FormControl('', [Validators.required, Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')])
  })

  get username() {
    return this.registrationForm.get('username')
  }
  get mobile() {
    return this.registrationForm.get('mobile')
  }
  get email() {
    return this.registrationForm.get('email')
  }
  get password() {
    return this.registrationForm.get('password')
  }

  onSubmit() {
    if (this.registrationForm.valid) {
    
      this.http.post<any>('http://localhost:3000/signup', this.registrationForm.value).subscribe((result) => {

        this.registered = true
        this.registrationForm.reset();
    }) }
      else{
        this.notRegistered = true
        this.registrationForm.reset();
      }

      
    };
}
