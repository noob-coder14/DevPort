import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { profile } from '../pages/dashboard/dashboard';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  Url = `http://localhost:3000/dashboard`;
  // UrlPortfolio = `http://localhost:3000/web-view`;
  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  // profileID:String = this.router.snapshot.params['id']

  getProfileData(id: any): Observable<profile> {
    console.log('Id : ', id);
    return this.http.get<profile>(`${this.Url}/${id}`);
  }

  // getProfileDataPortfolio(id: any): Observable<profile> {
  //   console.log('Id : ', id);
  //   return this.http.get<profile>(`${this.Url}/${id}`);
  // }

  postProfileData(data: profile) {
    this.http.post(this.Url, data);
  }
  updateProfileInformation(id: String, obj: profile) {
    return this.http.put(`${this.Url}/${id}`, obj);
  }
}
