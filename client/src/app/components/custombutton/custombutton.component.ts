import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custombutton',
  templateUrl: './custombutton.component.html',
  styleUrls: ['./custombutton.component.css']
})
export class CustombuttonComponent {
  @Input() buttonText!: string 
  constructor(){}
  
}
