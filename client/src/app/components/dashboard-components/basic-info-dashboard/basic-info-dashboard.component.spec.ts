import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoDashboardComponent } from './basic-info-dashboard.component';

describe('BasicInfoDashboardComponent', () => {
  let component: BasicInfoDashboardComponent;
  let fixture: ComponentFixture<BasicInfoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicInfoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
