import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditService } from 'src/app/core/services/user-edit.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-by-admin',
  templateUrl: './add-by-admin.component.html',
  styleUrls: ['./add-by-admin.component.scss']
})
export class AddByAdminComponent implements OnInit {

  dashboardForm: any = FormGroup;
  id: any;
  dashboardData: any;



  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private userEditService: UserEditService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.dashboardForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      strength: ['', Validators.required],
      about: ['', Validators.required],

    });

  }


  closeModal() {
    this.activeModal.close();
  }


  addDashboardFormData(data: any) {
    if (this.dashboardForm.invalid) {
      //this.alertService.showError("Field should not be empty");
    }
    else {
      this.userService.postDashboard(data).subscribe((result) => {
        

        console.log(result);
        if (result.success == true) {
          //this.alertService.showSuccess("Dashboard Added Successfully");
          this.activeModal.close(result.success);
        }
      });
    }
  }



}
