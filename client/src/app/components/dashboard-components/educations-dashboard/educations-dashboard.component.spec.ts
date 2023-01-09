import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationsDashboardComponent } from './educations-dashboard.component';

describe('EducationsDashboardComponent', () => {
  let component: EducationsDashboardComponent;
  let fixture: ComponentFixture<EducationsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
