import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebViewComponentsComponent } from './web-view-components.component';

describe('WebViewComponentsComponent', () => {
  let component: WebViewComponentsComponent;
  let fixture: ComponentFixture<WebViewComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebViewComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebViewComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
