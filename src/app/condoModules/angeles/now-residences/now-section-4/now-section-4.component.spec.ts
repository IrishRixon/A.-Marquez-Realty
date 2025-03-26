import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowSection4Component } from './now-section-4.component';

describe('NowSection4Component', () => {
  let component: NowSection4Component;
  let fixture: ComponentFixture<NowSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NowSection4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
