import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { ActivatedRoute } from '@angular/router';
import { User } from '../user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
  username: '',
  }
  errors: String = null;

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }
  register(){
    console.log("=======INSIDE REGISTER FUNCTION==========")
    this._dataService.register(this.user)
    .then((data)=>{
      if(data.errors){
        this.errors = data.errors.username.message
        console.log(data.errors.username.message)
      } else {
        this._router.navigate(['/dashboard'])
        console.log("logged In successfully")
      }
    })
    .catch((err)=>console.log("there was an error when Logging in"))
  }

  // submitLogin(){
  //   this._dataService.loginUser(this.user)
  //     .then(response => this.loggedUser = response)
  //     .catch(err => this.errormessage = err.error)
  //   // return this._router.navigateByUrl('/dashboard')
  // }
}
