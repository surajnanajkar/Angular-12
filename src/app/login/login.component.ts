import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';


  constructor(private fb: FormBuilder,private registrationService: RegistrationService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.registrationService.login(this.loginForm.value).subscribe(
        response => {
          if(response.id != null && response.message == 'Login successful'){
            console.log('Login successful', response);
            this.router.navigate(['/dashboard'])
          }else {
            alert(response.message)
          }
          
          
        },
        error => {
          this.errorMessage = 'Login failed. Please try again.';
        }
      );
    }
  }

}
