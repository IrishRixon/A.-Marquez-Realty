import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LighthouseSection2Component } from './lighthouse-section-2.component';

describe('LighthouseSection2Component', () => {
  let component: LighthouseSection2Component;
  let fixture: ComponentFixture<LighthouseSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LighthouseSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LighthouseSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
