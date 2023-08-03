import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditService } from 'src/app/core/services/user-edit.service';
import { UserService } from 'src/app/core/services/user.service';

import { EditDashboardComponent } from './edit-dashboard.component';

describe('EditDashboardComponent', () => {
  let component: EditDashboardComponent;
  let fixture: ComponentFixture<EditDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        NgbActiveModal
      ],
      declarations: [EditDashboardComponent],
      providers: [UserEditService, UserService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
