import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDropDownComponent } from './single-drop-down.component';

describe('SingleDropDownComponent', () => {
  let component: SingleDropDownComponent;
  let fixture: ComponentFixture<SingleDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
