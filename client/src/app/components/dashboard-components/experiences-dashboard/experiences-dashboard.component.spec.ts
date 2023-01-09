import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesDashboardComponent } from './experiences-dashboard.component';

describe('ExperiencesDashboardComponent', () => {
  let component: ExperiencesDashboardComponent;
  let fixture: ComponentFixture<ExperiencesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
