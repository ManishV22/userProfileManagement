import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { AlertService } from '@core/services/common/alert.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditService } from 'src/app/core/services/user-edit.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-dashboard',
  templateUrl: './edit-dashboard.component.html',
  styleUrls: ['./edit-dashboard.component.scss']
})
export class EditDashboardComponent implements OnInit {

  dashboardForm: any = FormGroup;
  id: any;
  dashboardData: any;
  _id: any;
  strengthId: FormArray;


  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    //      private alertService: AlertService,
    private userEditService: UserEditService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.dashboardForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender: ['', Validators.required],
      strength: this.formBuilder.array([new FormControl('')]),
      about: ['', Validators.required],

    });
    this._id = this.userEditService.getDashboardEditId();
    if (this._id !== undefined) {
      this.getDashboardDataById();
    }
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

  getDashboardDataById() {
    this.userService.getDashboardByID(this._id).subscribe((res: any) => {
      this.dashboardData = res;
      this.patchValuesToForm();
    });
  }

  patchValuesToForm() {
    this.dashboardForm.patchValue({
      name: this.dashboardData.name,
      email: this.dashboardData.email,
      gender: this.dashboardData.gender,
      strength: this.dashboardData.strength,
      about: this.dashboardData.about,
    });
  }

  closeModal() {
    this.activeModal.close();
  }

  addDashboardFormData(data: any) {
    console.log(data)
    if (this.dashboardForm.invalid) {
      // this.alertService.showError("Field should not be empty");
    } else if (this._id !== undefined) {
      var editData = {
        editID: this._id,
        name: this.dashboardForm.get('name').value,
        email: this.dashboardForm.get('email').value,
        gender: this.dashboardForm.get('gender').value,
        strength: this.dashboardForm.get('strength').value,
        about: this.dashboardForm.get('about').value
      }
      this.userService.updateDashboardByID(this._id, editData).subscribe((res: any) => {
        var status = res['success'];
        var msg = res['message'];
        if (status == true) {
          //this.alertService.showSuccess(msg);
          this.activeModal.close(status == true);
        } else {
          //this.alertService.showError(msg);
        }
      });
    } else {
      this.userService.postDashboard(data).subscribe((result) => {
        console.log(result);
        if (result.success == true) {
          //this.alertService.showSuccess("Dashboard added successfully");
          this.activeModal.close(result.success == true);
        }
      });
    }
  }

}
