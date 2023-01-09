import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoWebComponent } from './basic-info-web.component';

describe('BasicInfoWebComponent', () => {
  let component: BasicInfoWebComponent;
  let fixture: ComponentFixture<BasicInfoWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicInfoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
