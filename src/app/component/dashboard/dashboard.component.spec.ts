import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent,
                      HeaderComponent,
                      FooterComponent, 
      ],
      imports:[ RouterTestingModule,
                MatMenuModule,
                MatToolbarModule,
                MatDividerModule,

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Dashboard component should create', () => {
    expect(component).toBeTruthy();
  });
});
