import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  ngOnInit() { }

  user: User = {
  	userName: "",
  	email:"hellohello",
  	password: ""
  };

  onSubmit(): void{
  	//alert( "Name: " + this.user.userName + " " + "Password: "+this.user.password );
    console.log(this.user.userName);

    this.http.
    post("http://localhost:3000/apivalue",this.user).subscribe(
        data=> {
          alert( "Name: " + this.user.userName + " " + "Password: "+this.user.password );
          console.log('in subscribe');
          console.log("post req is successfull",data);
        }, 
        error=> {
          console.log("Error", error);
        });
      }
    }
