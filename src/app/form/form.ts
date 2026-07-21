import { Component, signal } from '@angular/core';
import { email, form, FormField } from '@angular/forms/signals';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  loginForm = new FormGroup({
    name : new FormControl<string>("", Validators.required),
    email : new FormControl<string>("", [Validators.required, Validators.email]),
    description : new FormControl<string>("", Validators.required)
  });

  onSubmit( event : Event ) {

    event.preventDefault();

    const credentials = this.loginForm; 
    console.log("Logging in with: ", credentials);
  
  }
    // e.g await this.authService.login(credencials);
}
