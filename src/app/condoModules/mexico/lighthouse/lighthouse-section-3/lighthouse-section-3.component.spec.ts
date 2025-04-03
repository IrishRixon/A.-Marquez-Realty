import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LighthouseSection3Component } from './lighthouse-section-3.component';

describe('LighthouseSection3Component', () => {
  let component: LighthouseSection3Component;
  let fixture: ComponentFixture<LighthouseSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LighthouseSection3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LighthouseSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
