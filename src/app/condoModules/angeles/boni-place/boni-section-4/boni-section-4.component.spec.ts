import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoniSection4Component } from './boni-section-4.component';

describe('BoniSection4Component', () => {
  let component: BoniSection4Component;
  let fixture: ComponentFixture<BoniSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoniSection4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoniSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
