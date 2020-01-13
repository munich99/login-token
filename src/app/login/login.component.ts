import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from  '../user';
import { AuthService } from  '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isSubmitted = false;

  constructor(private formBuilder:FormBuilder, formGroup:FormGroup, validators:Validators,
    private router:Router,
    private user:User,
    private authService:AuthService ) { 
  }

  ngOnInit() {
    // Loginform wird gruppiert/gebildet mit Hilfe importierter #formBuilder
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['', Validators.required]})
  }

  // Methode um kontrolierte Form Eingabe zurückzubekommen
  get formControls(){
    return this.loginForm.controls;
  }

  // Falls loginAngaben richtig sind
  login(){
    console.log(this.loginForm.value);
    // Eingaben sind vorhanden
    this.isSubmitted = true;
    // vohanden aber falsch -> Abbruch
    if(this.loginForm.invalid) return;
    // Eingaben sind vorhanden -> Werte zum Service übermitteln 
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');


  }

}
