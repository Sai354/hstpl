import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  cities: any;
  bloodgroups:any
  registerForm: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,  private route :Router) {
      this.cities = [
    
      {name: 'Male', code: 'NY'},
      {name: 'Female', code: 'RM'},
    
  ]; 

 }

  ngOnInit() {
    this.registerForm = this.fb.group({
      FirstName: ['',[Validators.required,Validators.minLength(3)]],
      middleName: [''],
      LastName: ['', [Validators.required, Validators.minLength(4),]],
      email: ['',Validators.required,Validators.email],
      mobileNumber: ['', [Validators.required, Validators.minLength(4),]],
      alternativeNumber: ['', [Validators.required, Validators.minLength(4),]],
      Gender: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      UserName: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      Password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
      ConfirmPassword: ['', [Validators.required]],
    },
     
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }


  onClick(){
    
    let password = this.registerForm.controls.Password.value
    
 let ConfirmPassword = this.registerForm.controls.ConfirmPassword.value
 if(password != ConfirmPassword)
  {
  alert("password and confirm password are not Matched")
 }
 else{
  this.route.navigateByUrl("main")
 }
 console.log(this.registerForm);
 
}
}