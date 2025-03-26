import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowSection2Component } from './now-section-2.component';

describe('NowSection2Component', () => {
  let component: NowSection2Component;
  let fixture: ComponentFixture<NowSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NowSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
