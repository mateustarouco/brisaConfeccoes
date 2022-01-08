import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showMenu = ''
  loginForm : FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private router :Router ) { }

  ngOnInit(): void {
    this.showMenu = this.router.url
    console.log(this.router.url)

    this.loginForm = this.formBuilder.group({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

}
