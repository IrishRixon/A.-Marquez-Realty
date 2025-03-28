import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoniPlaceComponent } from './boni-place.component';

describe('BoniPlaceComponent', () => {
  let component: BoniPlaceComponent;
  let fixture: ComponentFixture<BoniPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoniPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoniPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
