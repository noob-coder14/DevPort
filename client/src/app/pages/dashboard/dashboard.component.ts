import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';
import { profile } from './dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  profileInfo! : any;

  defaultEmail = '';

  profileForm = new FormGroup({

    basicInfo: new FormGroup({
      fullname:new FormControl('',[Validators.required,Validators.minLength(4)]),
      email:new FormControl(''),
      careerObj:new FormControl(''),
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
      eduDescription3: new FormControl('')
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
      jobDescription3: new FormControl('')
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
      projectDescription3: new FormControl('')
    }),

  })

  data: any
  value: any
  
  constructor(private formBuilder:FormBuilder, private profileData:ServiceService, private router:ActivatedRoute ){
    // this.data = this.profileForm
    
  }

  
  
  
  navElements = "basic-info"
  setNavElements(clickedItem:string){
    this.navElements = clickedItem
  }

  profileID:String = this.router.snapshot.params['id']

  getProfile():void{
    this.profileData.getProfileData(this.profileID).subscribe(res=> {
      this.profileInfo = res;
      console.log(res)
      // this.profileForm.get('basicInfo.email')?.setValue(res.email);
    })
  }
  
  ngOnInit():void{
    // this.getProfile()
    // console.log(this.profileID)
    // console.log(this.profileData.getProfileData())
    // console.log(this.profileForm)
    // this.profileForm.valueChanges.subscribe(form=>{
    //   console.log(form)
    // })
  }

  

  handleSubmit(){
    
      // console.log(this.profileForm.value)
  }

}


