import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountsWebComponent } from './user-accounts-web.component';

describe('UserAccountsWebComponent', () => {
  let component: UserAccountsWebComponent;
  let fixture: ComponentFixture<UserAccountsWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountsWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
