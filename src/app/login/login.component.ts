import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private route :Router ) { }
  form:any
  ngOnInit(): void {
    this.form = this.fb.group({
      username : '',
      password:''
    })
  }
users=[
  {
    user:"sai",
    password:"12345"
  },
  // {
  //   user:"akhil",
  //   password:"56789"
  // }
]
onClick(){
 let username = this.form.controls.username.value
 let password = this.form.controls.password.value
 for(let i=0;i<this.users.length;i++){
   if(username == this.users[i].user && password == this.users[i].password){
    // this.route.navigateByUrl("design")
    this.route.navigate(['/main']);

    alert("Username and Password Matched")
   }else{
     alert("incorrect username/password")
  }
 }
}

}

