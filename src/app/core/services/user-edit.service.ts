import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEditService {
  dashboardEditId: any;
  
  constructor() { }

  setDashboardEditId(data){
    this.dashboardEditId = data;
  }

  getDashboardEditId(): any{
    return this.dashboardEditId;
  }

}
