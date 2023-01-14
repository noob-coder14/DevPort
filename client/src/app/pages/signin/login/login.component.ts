import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
})
constructor(
  private formBuilder: FormBuilder,
  private profileData: ServiceService,
  private router: ActivatedRoute,
  private routerJump: Router
) {}

ngOnInit():void{

}

handleSubmit(){
  let loginFormValue:any = this.loginForm.value
  
  this.profileData.postLoginData(loginFormValue).subscribe((res)=>
  this.routerJump.navigate([`/dashboard/'${res._id}`]))
  
}
}
