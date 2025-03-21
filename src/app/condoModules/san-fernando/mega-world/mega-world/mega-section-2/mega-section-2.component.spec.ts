import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaSection2Component } from './mega-section-2.component';

describe('MegaSection2Component', () => {
  let component: MegaSection2Component;
  let fixture: ComponentFixture<MegaSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MegaSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
