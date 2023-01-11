import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { profile } from '../pages/dashboard/dashboard';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http: HttpClient, private router:ActivatedRoute) {}

  profileID:String = this.router.snapshot.params['id']
  Url = `http://localhost:3000/dashboard`

    getProfileData(){
      this.http.get(this.Url).subscribe(res=>console.log(res))
    }
    postProfileData(data:profile){
      this.http.post(this.Url,data)
    }
   
}

