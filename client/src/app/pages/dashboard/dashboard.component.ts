import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  profileForm = new FormGroup({

    basicInfo: new FormGroup({
      fullname:new FormControl('',[Validators.required]),
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
      companyName: new FormControl(''),
      jobRole: new FormControl(''),
      job_tags: new FormControl(''),
      jobDescription: new FormControl(''),
    }),

    projects: new FormGroup({
      projectTitle: new FormControl(''),
      imggallery: new FormControl(''),
      project_tags: new FormControl(''),
      projectDescription: new FormControl('')
    }),

  })

  

  constructor(private formBuilder:FormBuilder){}
  navElements = "basic-info"
  setNavElements(clickedItem:string){
    this.navElements = clickedItem
  }
  
  ngOnInit():void{
    // console.log(this.profileForm)
    // this.profileForm.valueChanges.subscribe(form=>{
    //   console.log(form)
    // })
  }

  handleSubmit(){
      console.log(this.profileForm.value)
  }

}


