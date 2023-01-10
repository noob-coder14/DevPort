import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-educations-dashboard',
  templateUrl: './educations-dashboard.component.html',
  styleUrls: ['./educations-dashboard.component.css']
})


export class EducationsDashboardComponent implements OnInit{
  educationForm!: FormGroup;
  get newInstitutions(){
    return this.educationForm.get('newInstitutions') as FormArray
  }
  get newSingleInstitution(){
    return this.newInstitutions.push(this.fb.group({
      educationLevel: [''],
      institution: [''],
      description: ['']
    }))
  }
  constructor(private fb: FormBuilder) { }
  
  
  ngOnInit(){
    this.educationForm = this.fb.group({
      newInstitutions: this.fb.array([
        this.fb.group({
          educationLevel: [''],
          institution: [''],
          description: ['']
        })
      ])
  })
}
}
