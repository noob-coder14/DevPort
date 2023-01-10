import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent {
  constructor(){}
  
    files: File[] = [];

    onSelect(event:any) {
      console.log(event);
      this.files.push(...event.addedFiles);
    }
  
    onRemove(event:any) {
      console.log(event);
      this.files.splice(this.files.indexOf(event), 1);
    }
  
}
