import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaWorldComponent } from './mega-world.component';

describe('MegaWorldComponent', () => {
  let component: MegaWorldComponent;
  let fixture: ComponentFixture<MegaWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MegaWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
