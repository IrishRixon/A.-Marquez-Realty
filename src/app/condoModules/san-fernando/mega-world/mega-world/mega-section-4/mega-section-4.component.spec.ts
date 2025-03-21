import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaSection4Component } from './mega-section-4.component';

describe('MegaSection4Component', () => {
  let component: MegaSection4Component;
  let fixture: ComponentFixture<MegaSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MegaSection4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
