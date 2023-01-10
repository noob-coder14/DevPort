import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Output() 
  navClicked = new EventEmitter();
  navclick(clickedElements: string){
    this.navClicked.emit(clickedElements)
    console.log(clickedElements)
  }
  ngInit():void{
    
  }
}
