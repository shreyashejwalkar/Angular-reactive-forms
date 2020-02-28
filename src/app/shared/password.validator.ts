import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control : AbstractControl) : { [key : string]: boolean} | null
{
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    // check if feild is not modified then return null
    if(password.pristine || confirmPassword.pristine)
    {
        return null;
    }
    // if password is not blank and confirm password is not blank and both value are not equal then return misMatch error 
    // and if both value are equal then return null
    return password && confirmPassword && password.value !== confirmPassword.value ? {'misMatch' : true} : null;
}

