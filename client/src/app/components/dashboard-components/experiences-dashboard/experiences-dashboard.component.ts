import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experiences-dashboard',
  templateUrl: './experiences-dashboard.component.html',
  styleUrls: ['./experiences-dashboard.component.css']
})
export class ExperiencesDashboardComponent {
  experienceForm!: FormGroup;
  get newInstitutions(){
    return this.experienceForm.get('newInstitutions') as FormArray
  }
  get newSingleInstitution(){
    return this.newInstitutions.push(this.fb.group({
      company: [''],
      job_role: [''],
      skills: [['react','angular']],
      job_description: ['']
    }))
  }
  constructor(private fb: FormBuilder) { }
  
  
  ngOnInit(){
    this.experienceForm = this.fb.group({
      newInstitutions: this.fb.array([
        this.fb.group({
          company: [''],
          job_role: [''],
          skills: [[]],
          job_description: ['']
        })
      ])
      
    });
  }
}
