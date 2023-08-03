import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//const API_URL = 'http://localhost:8080/api/test/';
// const API_URL = 'http://localhost:8080';
// const API_URL1 = "http://localhost:3001/posts";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/test/` + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/test/` + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/test/` + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/test/` + 'admin', { responseType: 'text' });
  }

  // getDashboard(): Observable<any> {
  //   return this.http.get(`${API_URL}/dashboard`);
  // }



  getDashboard1(): Observable<any> {
    return this.http.get(`${environment.API_URL1}`);
  }

  getDashboardByID(_id: any): Observable<any> {
    return this.http.get(`${environment.API_URL1}/${_id}`)
  }
  postDashboard(data: any): Observable<any> {
    debugger
    return this.http.post(`${environment.API_URL1}`, data);
  }

  deleteDashboardRow(id: any): Observable<any> {
    return this.http.delete(`${environment.API_URL1}/${id}`);
}

  updateDashboardByID(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.API_URL1}/${id}`, data);
  }


}
