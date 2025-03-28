import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoniSection1Component } from './boni-section-1.component';

describe('BoniSection1Component', () => {
  let component: BoniSection1Component;
  let fixture: ComponentFixture<BoniSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoniSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoniSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
