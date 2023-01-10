import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  navElements = "basic-info"
  setNavElements(clickedItem:string){
    this.navElements = clickedItem
  }
}
