import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data : any;

  name : any = localStorage.getItem('Username')

  constructor(private http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/signup').subscribe((res=>{
      this.data=res
    }))
    
}
onClickLogout(){

  localStorage.removeItem("token")
  localStorage.removeItem("Username")

  this.router.navigate(['login'])
}

}
