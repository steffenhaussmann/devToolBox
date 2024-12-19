import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureButtonComponent } from './feature-button.component';

describe('FeatureButtonComponent', () => {
  let component: FeatureButtonComponent;
  let fixture: ComponentFixture<FeatureButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
