import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../core/services/user.service';
import { UserEditService } from '../core/services/user-edit.service';
import { AddDashboardComponent } from './add-dashboard/add-dashboard.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { UserViewService } from '../core/services/user-view.service';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  _id: any;
  closeResult: string;

  users: any;
  dashboardData: any;
  //id: any;

  constructor(
    private modalService: NgbModal,
    //    private alertService: AlertService,
    private userViewService: UserViewService,
    private userEditService: UserEditService,
    private userService: UserService
  ) { }


  ngOnInit(): void {
    this._id = this.userViewService.getDashboardViewId();
    this.getDashboardData();
    this.getDashboardDataById();
  }


  // getDashboardDataById(){
  //   this.userService.getDashboardByID(this.id).subscribe((res: any)=>{
  //     this.dashboardData = res;
  //   });
  // }

  addDashboardFormData(data: any) {
    console.log(data)
    this.userService.postDashboard(data).subscribe((result) => {
      console.log(result)
      this.getDashboardDataById();
    })

  }

  getDashboardDataById() {
//    debugger;
    this.userService.getDashboardByID(this._id).subscribe((res: any) => {
      this.dashboardData = res;
      //this.patchValuesToForm();
    });
  }

  getDashboardData() {
    this.userService.getDashboard1().subscribe((response) => {
      //console.log(response);
      this.dashboardData = response
    })
  }


  openForm() {
    this.modalService.open(AddDashboardComponent, { backdrop: 'static', size: 'md', keyboard: true, centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result == true) {
        this.getDashboardDataById();
      }
    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  view(_id) {
    this.userViewService.setDashboardViewId(_id);
    this.modalService.open(ViewDashboardComponent, { backdrop: 'static', size: 'lg', keyboard: true, centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      // if(result == true){
      //   this.getDashboardDataById();
      // }
      //    debugger;
    }, (reason) => {
      // debugger;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // console.log('result',reason);
    });
  }

  edit(id) {
    this.userEditService.setDashboardEditId(id);
    this.modalService.open(EditDashboardComponent, { backdrop: 'static', size: 'md', keyboard: true, centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result == true) {
        this.getDashboardDataById();
      }
    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onDelete(id) {
    this.userService.deleteDashboardRow(id).subscribe((res: any) => {
      var success = res['success'];
      var msg = res['message'];
      if (success == true) {
        this.getDashboardDataById();
        //this.alertService.showSuccess('Deleted Successfully');
      } else {
        // this.alertService.showError(msg);
      }
    });
  }
}
