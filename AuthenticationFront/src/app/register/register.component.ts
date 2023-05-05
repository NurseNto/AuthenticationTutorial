import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formB: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formB.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(15)]],
      password: ['', [Validators.required, Validators.minLength(15)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  onRegister(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Username', form.value.username);
    console.log('Email', form.value.email);
    console.log('Phone', form.value.phone);
    console.log('Password', form.value.password);
    console.log('Confirmpassword', form.value.confirmpassword);
  }

}
