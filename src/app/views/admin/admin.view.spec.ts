import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminView } from './admin.view';

describe('AdminView', () => {
  let component: AdminView;
  let fixture: ComponentFixture<AdminView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminView],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
