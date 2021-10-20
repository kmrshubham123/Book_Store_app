import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminregistrationComponent } from './adminregistration.component';

describe('AdminregistrationComponent', () => {
  let component: AdminregistrationComponent;
  let fixture: ComponentFixture<AdminregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminregistrationComponent ],
      imports:[ MatSnackBarModule,
                ReactiveFormsModule,
                HttpClientModule,MatInputModule,
                BrowserAnimationsModule,MatCardModule,
                MatIconModule


      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
