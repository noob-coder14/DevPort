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
import { signin } from 'src/app/interfaces/signin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMsg : String | undefined
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

ngOnInit(): void {
  const userStr = localStorage.getItem('user');
  if (userStr) {
    const user = JSON.parse(userStr);
    
    this.routerJump.navigate([`/dashboard/'${user._id}`])
    
  }
}

// handleSubmit(){
//   console.log(this.loginForm.value)
//   let loginFormValue:any = this.loginForm.value
  
//   // this.profileData.postLoginData(loginFormValue).subscribe({
//   //     next:(res:any)=>{
//   //       this.routerJump.navigate([`/dashboard/'${res._id}`])
//   //     },
//   //     err:(err)=>console.log(err)
//   // });
  
// }

handleSubmit() {
  const loginFormValue  = this.loginForm.value;
  console.log(loginFormValue);
  if (loginFormValue) {
    
        this.profileData.postLoginData(loginFormValue).subscribe({
          next: (res: any) => {
            localStorage.setItem('accessToken', res.headers.get('authorization'));
            localStorage.setItem('user', JSON.stringify(res.body.user));
            this.routerJump.navigate([`/dashboard/'${res.body.user._id}`])
            // this.loginEvent.emit(true)
    
            // if (res.body.user.usertype === 'admin') {
            //   this.router.navigate(['kitchen']);
    
            // } else {
            //   this.router.navigate(['home']);
            // }
        },
        error: error => this.errorMsg = error.error
        });
      
      
  } else {
    this.errorMsg = 'Please enter email and password.'
  }
}
}
