import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserViewService {
  _id: any;

  constructor() { }

  setDashboardViewId(data){
    this._id = data;
  }

  getDashboardViewId(): any{
    return this._id;
  }

}
