import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LighthouseSection4Component } from './lighthouse-section-4.component';

describe('LighthouseSection4Component', () => {
  let component: LighthouseSection4Component;
  let fixture: ComponentFixture<LighthouseSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LighthouseSection4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LighthouseSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
