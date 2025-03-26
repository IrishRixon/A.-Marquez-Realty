import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheManansalaComponent } from './the-manansala.component';

describe('TheManansalaComponent', () => {
  let component: TheManansalaComponent;
  let fixture: ComponentFixture<TheManansalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheManansalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheManansalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
