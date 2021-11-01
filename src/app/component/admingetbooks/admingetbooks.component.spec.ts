import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingetbooksComponent } from './admingetbooks.component';

describe('AdmingetbooksComponent', () => {
  let component: AdmingetbooksComponent;
  let fixture: ComponentFixture<AdmingetbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingetbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingetbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
