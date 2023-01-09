import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountsDashboardComponent } from './user-accounts-dashboard.component';

describe('UserAccountsDashboardComponent', () => {
  let component: UserAccountsDashboardComponent;
  let fixture: ComponentFixture<UserAccountsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
