import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaSection3Component } from './mega-section-3.component';

describe('MegaSection3Component', () => {
  let component: MegaSection3Component;
  let fixture: ComponentFixture<MegaSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegaSection3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
