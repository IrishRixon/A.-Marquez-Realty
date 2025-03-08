import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureNorthComponent } from './azure-north.component';

describe('AzureNorthComponent', () => {
  let component: AzureNorthComponent;
  let fixture: ComponentFixture<AzureNorthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureNorthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureNorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
