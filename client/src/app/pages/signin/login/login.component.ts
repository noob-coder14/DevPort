import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { signin } from 'src/app/interfaces/signin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMsg: String | undefined;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    private profileData: ApiService,
    private router: ActivatedRoute,
    private routerJump: Router
  ) {}

  ngOnInit(): void {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);

      // this.routerJump.navigate([`/dashboard/'${user._id}`])
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
    const loginFormValue = this.loginForm.value;
    console.log(loginFormValue);
    if (loginFormValue) {
      this.profileData.postLoginData(loginFormValue).subscribe({
        next: (res: any) => {
          console.log('Res :', res.body);
          localStorage.setItem('accessToken', res.headers.get('authorization'));
          localStorage.setItem('user', JSON.stringify(res.body.user));
          localStorage.setItem('userId', res.body.user._id);
          this.routerJump.navigate([`/dashboard`]);
        },
        error: (error) => (this.errorMsg = error.error),
      });
    } else {
      this.errorMsg = 'Please enter email and password.';
    }
  }
}
