import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationsWebComponent } from './educations-web.component';

describe('EducationsWebComponent', () => {
  let component: EducationsWebComponent;
  let fixture: ComponentFixture<EducationsWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationsWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
