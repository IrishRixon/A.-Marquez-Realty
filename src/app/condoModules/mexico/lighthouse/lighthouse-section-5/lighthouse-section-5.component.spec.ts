import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LighthouseSection5Component } from './lighthouse-section-5.component';

describe('LighthouseSection5Component', () => {
  let component: LighthouseSection5Component;
  let fixture: ComponentFixture<LighthouseSection5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LighthouseSection5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LighthouseSection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
