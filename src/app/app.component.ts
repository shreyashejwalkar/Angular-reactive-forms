import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  constructor(private formbuilder: FormBuilder){}
  title = 'reactive-forms';
  registrationForm : FormGroup;
  ngOnInit()
  {
    this.registrationForm = this.formbuilder.group({
      username : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email : [''],
      subscribe : [false],
      password: [''],
        confirmPassword: [''],
        address: this.formbuilder.group({
          city:[''],
          state: [''],
          postalCode: ['']
        }),
        alternateEmails : this.formbuilder.array([])
     },{validator : PasswordValidator});

     this.registrationForm.get('subscribe').valueChanges // get hold of subscribe element and access valuechange which return observable
     .subscribe(checkedValue => //subscribe to observable
      {  
       const email = this.registrationForm.get('email');
       //if checkbox is checked then set email to required else email is not required
       if(checkedValue)
       {
         email.setValidators(Validators.required);
       }
       else
       {
         email.clearValidators();
       }
       // ensure correct status
       email.updateValueAndValidity();
     });
  }
 
  get username()
  {
    return this.registrationForm.get('username');
  }

  get email()
  {
    return this.registrationForm.get('email');
  }

  get alternateEmails()
  {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  // dynamically add form control into form array
  addAlternateEmail()
  {
    this.alternateEmails.push(this.formbuilder.control(''));
  }
  
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
