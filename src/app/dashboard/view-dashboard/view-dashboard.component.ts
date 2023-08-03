import { Component, OnInit } from '@angular/core';
//import { AlertService } from '@core/services/common/alert.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserViewService } from 'src/app/core/services/user-view.service';
//import { PagerService } from '@shared/directives';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.scss']
})
export class ViewDashboardComponent implements OnInit {

  id: any;
  dashboardData: any;
  dashboardId: any;
  addItems: any;

  constructor(
    private activeModal: NgbActiveModal,
    private modalService: NgbModal,
    //  private alertService: AlertService,
    private userService: UserService,
    private userViewService: UserViewService
    //private pagerServcie: PagerService,
  ) { }

  ngOnInit(): void {
    //    this.id = this.userViewService.getDashboardViewId();
    // this.getDashboardDataById();
  }



  // getDashboardDataById(){
  //   this.userService.getDashboardByID(this.id).subscribe((res: any)=>{
  //     this.dashboardData = res;
  //   });
  // }

  closeModal() {
    this.activeModal.close();
  }

}
