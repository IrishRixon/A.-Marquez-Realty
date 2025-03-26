import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowSection1Component } from './now-section-1.component';

describe('NowSection1Component', () => {
  let component: NowSection1Component;
  let fixture: ComponentFixture<NowSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NowSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
