import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formbuilder: FormBuilder){}
  title = 'reactive-forms';
  registrationForm = this.formbuilder.group({
  username : [''],
  password: [''],
    confirmPassword: [''],
    address: this.formbuilder.group({
      city:[''],
      state: [''],
      postalCode: ['']
    })

 });

  /* registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })

  }); */

  loadApiData()
  {
    this.registrationForm.setValue({
      username: 'Shreya',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Nashik',
        state: 'Maharashtra',
        postalCode: '422101'
      }
    });

  }
}
