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

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    private profileData: ApiService,
    private router: ActivatedRoute,
    private routerJump: Router
  ) {}

  ngOnInit(): void {}

  handleSubmit() {
    let signInFormValue: any = this.signInForm.value;
    this.profileData.postRegData(signInFormValue).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('userId', res.userId);
      this.routerJump.navigate([`/dashboard`]);
    });
  }
}
