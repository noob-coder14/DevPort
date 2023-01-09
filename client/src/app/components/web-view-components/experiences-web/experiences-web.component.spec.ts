import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesWebComponent } from './experiences-web.component';

describe('ExperiencesWebComponent', () => {
  let component: ExperiencesWebComponent;
  let fixture: ComponentFixture<ExperiencesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
