import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { AlertService } from '@core/services/common/alert.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from 'src/app/core/common-services/notification.service';
import { UserEditService } from 'src/app/core/services/user-edit.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-dashboard',
  templateUrl: './add-dashboard.component.html',
  styleUrls: ['./add-dashboard.component.scss']
})
export class AddDashboardComponent implements OnInit {

  dashboardForm: any = FormGroup;
//  id: any;
  dashboardData: any;
  strengthId: any;
  _id: any;



  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    //      private alertService: AlertService,
    private userEditService: UserEditService,
    private notify: NotificationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.dashboardForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender: ['', Validators.required],
      strength: this.formBuilder.array([new FormControl('')]),
//      strength: ['', Validators.required],
      about: ['', Validators.required],

    });

  }

  get strengthControls() {
    return this.dashboardForm.get('strength')['controls'];
  }

  addStrength() {
    this.strengthId = this.dashboardForm.get('strength') as FormArray;
    this.strengthId.push(new FormControl(''));
  }

  removeStrength(i){
    this.strengthId.removeAt(i);
  }


  closeModal() {
    this.activeModal.close();
  }

  getDashboardDataById() {
    this.userService.getDashboardByID(this._id).subscribe((res: any) => {
      console.log(res)
      this.dashboardData = res;
    });
  }

  addDashboardFormData(data: any) {
    debugger;
    if (this.dashboardForm.invalid) {
      this.notify.showError("Field should not be empty");
    }
    else {
      this.userService.postDashboard(data).subscribe((result) => {
        //let msg = result['message'];
        //let status = result['success'];
        //console.log(result)

        if(result){
          
//        this.dashboardForm.reset();
//        console.log(result);
//        if (result.success == true) {
          this.notify.showSuccess("User Information Added Successfully");
          this.activeModal.close();
        }
      });
    }
    this.dashboardForm.reset();
    this.getDashboardDataById();
  }



}
