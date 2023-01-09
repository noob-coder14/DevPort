import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormWebComponent } from './contact-form-web.component';

describe('ContactFormWebComponent', () => {
  let component: ContactFormWebComponent;
  let fixture: ComponentFixture<ContactFormWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
