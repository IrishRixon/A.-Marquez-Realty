import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowSection3Component } from './now-section-3.component';

describe('NowSection3Component', () => {
  let component: NowSection3Component;
  let fixture: ComponentFixture<NowSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NowSection3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
