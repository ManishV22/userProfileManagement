import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModel } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalModule, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddByAdminComponent } from './add-by-admin.component';



describe('AddByAdminComponent', () => {
  
  let component: AddByAdminComponent;
  let fixture: ComponentFixture<AddByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[NgbActiveModal,NgbModule,NgbModal,ModalDismissReasons,NgbModalModule],
      declarations: [ AddByAdminComponent ],
      providers:[NgbActiveModal,NgbModule,NgbModal],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should open a YesNoDialog', async () => {
  //   // Spy on and fake the open function
  //   spyOn(ngbModalService, 'open').and.callFake((dlg, opt) => {
  //     // Call the beforeDismiss function to close the dialog
  //     setTimeout(opt.beforeDismiss);
  //     return <NgbModalRef>({ componentInstance: new YesNoDialog() })
  //   });
  //   await modalService.showYesNoDialog('title', 'body');
  //   // Verify that the dialog was opened
  //   expect(ngbModalService.open).toHaveBeenCalled();
  // });
  


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
