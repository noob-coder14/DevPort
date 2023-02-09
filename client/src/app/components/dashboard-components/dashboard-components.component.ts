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
  profileForm = this.formBuilder.group({
    basicInfo: this.formBuilder.group({
      // fullname: new FormControl('',
      // [
      //   Validators.required,
      //   Validators.minLength(4),
      // ]),
      fullname: [],
      jobTitle: [],
      email: [],
      careerObj: [],
      pphoto: [],
    }),

    userAccInfo: this.formBuilder.group({
      githubLink: [],
      soLink: [],
      leetcodeLink: [],
    }),

    education: this.formBuilder.group({
      eduLevel1: [],
      instName1: [],
      eduDescription1: [],
      eduLevel2: [],
      instName2: [],
      eduDescription2: [],
      eduLevel3: [],
      instName3: [],
      eduDescription3: [],
    }),

    experiences: this.formBuilder.group({
      companyName1: [],
      jobRole1: [],
      // job_tags: [],
      jobDescription1: [],

      companyName2: [],
      jobRole2: [],
      // job_tags: [],
      jobDescription2: [],

      companyName3: [],
      jobRole3: [],
      // job_tags: [],
      jobDescription3: [],
    }),

    projects: this.formBuilder.group({
      projectTitle1: [],
      demovideo1: [],
      // project_tags: [],
      projectDescription1: [],

      projectTitle2: [],
      demovideo2: [],
      // project_tags: [],
      projectDescription2: [],

      projectTitle3: [],
      demovideo3: [],
      // project_tags: [],
      projectDescription3: [],
    }),
  });

  educationGroup(): FormGroup {
    return this.formBuilder.group({
      eduLevel: [],
      instName: [],
      eduDescription: [],
    });
  }

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
    console.log('from dashboard component ', this.navElements);
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
