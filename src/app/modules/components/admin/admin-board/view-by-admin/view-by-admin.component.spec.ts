import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ViewByAdminComponent } from './view-by-admin.component';

describe('ViewByAdminComponent', () => {
  let component: ViewByAdminComponent;
  let fixture: ComponentFixture<ViewByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbActiveModal],
      declarations: [ViewByAdminComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
