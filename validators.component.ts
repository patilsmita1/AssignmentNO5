import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent {

  emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    title = 'reactive-form';
    

    registerForm = new FormGroup({
      pname : new FormControl("",[Validators.required,Validators.maxLength(50)]),
    
      email : new FormControl("",[Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]),

    })

    getControl(name :any): AbstractControl | null {
        return this.registerForm.get(name)
    }

    registerFn(){
      this.registerForm
    }

}
