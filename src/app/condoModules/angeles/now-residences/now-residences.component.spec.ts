import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowResidencesComponent } from './now-residences.component';

describe('NowResidencesComponent', () => {
  let component: NowResidencesComponent;
  let fixture: ComponentFixture<NowResidencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NowResidencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowResidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
