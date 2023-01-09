import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDashboardComponent } from './projects-dashboard.component';

describe('ProjectsDashboardComponent', () => {
  let component: ProjectsDashboardComponent;
  let fixture: ComponentFixture<ProjectsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
