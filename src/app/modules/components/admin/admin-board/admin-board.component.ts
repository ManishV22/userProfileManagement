import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserEditService } from 'src/app/core/services/user-edit.service';
import { UserViewService } from 'src/app/core/services/user-view.service';
import { UserService } from 'src/app/core/services/user.service';
import { AddByAdminComponent } from './add-by-admin/add-by-admin.component';
import { EditByAdminComponent } from './edit-by-admin/edit-by-admin.component';
import { ViewByAdminComponent } from './view-by-admin/view-by-admin.component';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {

  _id: any;
  closeResult: string;

  users: any;
  allItems: any;
  dashboardData: any;
  id: any;


  editClick = false;
  // pager: any = {};
  // pagedItems: any[];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  searchInput: any = '';


  constructor(
    private modalService: NgbModal,
    //    private alertService: AlertService,
    private userViewService: UserViewService,
    private userEditService: UserEditService,
    private userService: UserService
  ) { }

  addDashboardFormData(data: any) {
    console.log(data)
    this.userService.postDashboard(data).subscribe((result) => {
      console.log(result)
      this.getLatestDashboard();
    })

  }


  //  getDashboardDataById(){
  //   this.userService.getDashboardByID(this.id).subscribe((res: any)=>{
  //     console.log(res)
  //     this.dashboardData = res;
  //   });
  // }

  getLatestDashboard() {
    this.userService.getDashboard1().subscribe((response) => {
      console.log(response);
      this.dashboardData = response
    })
  }

  ngOnInit(): void {
    this.getLatestDashboard();
  }

  openForm() {
    this.modalService.open(AddByAdminComponent, { backdrop: 'static', size: 'md', keyboard: true, centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result == true) {
        this.getLatestDashboard();
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
    this.modalService.open(ViewByAdminComponent, { backdrop: 'static', size: 'lg', keyboard: true, centered: true }).result.then((result) => {
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

  edit(_id) {
    this.userEditService.setDashboardEditId(_id);
    this.modalService.open(EditByAdminComponent, { backdrop: 'static', size: 'md', keyboard: true, centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result == true) {
        this.getLatestDashboard();
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
        this.getLatestDashboard();
        //this.alertService.showSuccess('Deleted Successfully');
      } else {
        // this.alertService.showError(msg);
      }
    });
  }



  search(): void {
    debugger
    let input = this.searchInput;
    this.dashboardData = this.dashboardData;
    if (input == '') {
      this.dashboardData = this.dashboardData
    } else {
      this.dashboardData = this.dashboardData.filter((res: any) => {
        var matchData = (res.name.toLocaleLowerCase().match(input.toLocaleLowerCase()));
        return matchData;

      });
    }
  }


}
