import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { profile } from '../interfaces/profile';
import { leetcode } from '../interfaces/leetcode';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { signin } from '../interfaces/signin';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  Url = `http://localhost:3000/dashboard`;
  // UrlPortfolio = `http://localhost:3000/web-view`;
  leetcodeURL = "https://leetcode-stats-api.herokuapp.com/"
  registerURL = "http://localhost:3000/register"
  loginURL = "http://localhost:3000/login"


  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  // profileID:String = this.router.snapshot.params['id']

  getAllProfileData(): Observable<profile[]> {
    return this.http.get<profile[]>(`${this.Url}/`);
  }

  getProfileData(id: any): Observable<profile> {
    console.log('Id : ', id);
    return this.http.get<profile>(`${this.Url}/${id}`);
  }

  // getProfileDataPortfolio(id: any): Observable<profile> {


  postProfileData(data: profile) {
    this.http.post(this.Url, data);
  }
  updateProfileInformation(id: String, obj: profile) {
    return this.http.put(`${this.Url}/${id}`, obj);
  }

  getLeetCodeData(username: string):Observable<leetcode> {
    return this.http.get<leetcode>(`${this.leetcodeURL}/${username}`)
  }
  postRegData(data:signin){
    return this.http.post<signin>(`${this.registerURL}`,data)
  }
  postLoginData(data:signin){
    return this.http.post<signin>(`${this.loginURL}`,data)
  }
}
