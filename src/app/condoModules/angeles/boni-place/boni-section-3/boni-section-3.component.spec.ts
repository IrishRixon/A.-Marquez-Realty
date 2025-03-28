import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoniSection3Component } from './boni-section-3.component';

describe('BoniSection3Component', () => {
  let component: BoniSection3Component;
  let fixture: ComponentFixture<BoniSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoniSection3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoniSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
