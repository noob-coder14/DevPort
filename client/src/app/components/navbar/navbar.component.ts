import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( private route : Router){}
  btnText = "Log Out"
  localStore = localStorage.getItem("userId")

  logout() {
    console.log("logout")
    // console.log(localStorage.getItem("userId"))
    // localStorage.clear();
    // this.route.navigate(['login']);
  }
}
