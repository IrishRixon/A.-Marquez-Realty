import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LighthouseSection1Component } from './lighthouse-section-1.component';

describe('LighthouseSection1Component', () => {
  let component: LighthouseSection1Component;
  let fixture: ComponentFixture<LighthouseSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LighthouseSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LighthouseSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
