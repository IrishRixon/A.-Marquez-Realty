import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoniSection2Component } from './boni-section-2.component';

describe('BoniSection2Component', () => {
  let component: BoniSection2Component;
  let fixture: ComponentFixture<BoniSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoniSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoniSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
