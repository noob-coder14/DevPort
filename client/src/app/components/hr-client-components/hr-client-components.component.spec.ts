import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrClientComponentsComponent } from './hr-client-components.component';

describe('HrClientComponentsComponent', () => {
  let component: HrClientComponentsComponent;
  let fixture: ComponentFixture<HrClientComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrClientComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrClientComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
