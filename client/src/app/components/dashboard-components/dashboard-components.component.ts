import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Route } from '@angular/router';
import { profile } from '../../interfaces/profile';

@Component({
  selector: 'app-dashboard-components',
  templateUrl: './dashboard-components.component.html',
  styleUrls: ['./dashboard-components.component.css'],
})
export class DashboardComponentsComponent {
  profileInfo!: any;
  navElements = 'basic-info';
  profileID: any = '';
  // skillsData = [''];
  skillsInput: string = '';
  skillExists: string = '';
  profileForm = new FormGroup({
    basicInfo: new FormGroup({
      // fullname: new FormControl('',
      // [
      //   Validators.required,
      //   Validators.minLength(4),
      // ]),
      fullname: new FormControl(''),
      jobTitle: new FormControl(''),
      email: new FormControl(''),
      careerObj: new FormControl(''),
      pphoto: new FormControl(''),
    }),

    userAccInfo: new FormGroup({
      githubLink: new FormControl(''),
      soLink: new FormControl(''),
      leetcodeLink: new FormControl(''),
    }),

    education: new FormGroup({
      eduLevel1: new FormControl(''),
      instName1: new FormControl(''),
      eduDescription1: new FormControl(''),
      eduLevel2: new FormControl(''),
      instName2: new FormControl(''),
      eduDescription2: new FormControl(''),
      eduLevel3: new FormControl(''),
      instName3: new FormControl(''),
      eduDescription3: new FormControl(''),
    }),

    experiences: new FormGroup({
      companyName1: new FormControl(''),
      jobRole1: new FormControl(''),
      // job_tags: new FormControl(''),
      jobDescription1: new FormControl(''),

      companyName2: new FormControl(''),
      jobRole2: new FormControl(''),
      // job_tags: new FormControl(''),
      jobDescription2: new FormControl(''),

      companyName3: new FormControl(''),
      jobRole3: new FormControl(''),
      // job_tags: new FormControl(''),
      jobDescription3: new FormControl(''),
    }),

    projects: new FormGroup({
      projectTitle1: new FormControl(''),
      demovideo1: new FormControl(''),
      // project_tags: new FormControl(''),
      projectDescription1: new FormControl(''),

      projectTitle2: new FormControl(''),
      demovideo2: new FormControl(''),
      // project_tags: new FormControl(''),
      projectDescription2: new FormControl(''),

      projectTitle3: new FormControl(''),
      demovideo3: new FormControl(''),
      // project_tags: new FormControl(''),
      projectDescription3: new FormControl(''),
    }),
  });

  data: any;
  value: any;
  skillsData: any;
  routerJump: any;

  constructor(
    private formBuilder: FormBuilder,
    private profileData: ApiService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.profileID = localStorage.getItem('userId');
    console.log('Profile ID : ', this.profileID);
    this.getProfile();

    // const userStr = localStorage.getItem('user');
    // if(userStr){
    //   const user = JSON.parse(userStr);
    //   this.routerJump.navigate([`'dashboard/'+${this.profileID}`])
    //   // if(user.usertype === 'admin'){
    //   //   this.routerJump.navigate([])
    //   // }
    // }
    // else{
    //   this.routerJump.navigate([`login`])
    // }
  }

  setNavElements(clickedItem: string) {
    this.navElements = clickedItem;
  }

  getProfile(): void {
    this.profileData.getProfileData(this.profileID).subscribe((res: any) => {
      this.profileInfo = res;
      console.log('User Profile Data : ', res);
      this.profileForm.patchValue(res);
      this.skillsData = res.basicInfo.skillsData
        ? res.basicInfo.skillsData
        : [];
      // this.profileForm.get('basicInfo.email')?.setValue(res.email);
    });
  }

  handleSubmit() {
    // console.log(this.profileForm.value)
    let finalFormValue: any = this.profileForm.value;
    finalFormValue.basicInfo.skillsData = this.skillsData;
    // console.log(JSON.stringify(finalFormValue, undefined, 3));
    this.profileData
      .updateProfileInformation(this.profileID, finalFormValue)
      .subscribe((res) => {
        alert('Profile Information Successfully Updated');
      });
  }
  onAddSkills() {
    if (
      !this.skillsData.includes(this.skillsInput) &&
      this.skillsInput !== ''
    ) {
      this.skillsData.push(this.skillsInput);
    }
    this.skillsInput = '';
  }
  onRemoveSkill(skill: any) {
    console.log('remove ', skill);
    const index = this.skillsData.indexOf(skill);
    this.skillsData.splice(index, 1);
  }
  // postRegData(){
  //   this.
  // }
}
