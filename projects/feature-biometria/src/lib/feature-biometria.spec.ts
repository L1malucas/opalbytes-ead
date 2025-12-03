import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBiometria } from './feature-biometria';

describe('FeatureBiometria', () => {
  let component: FeatureBiometria;
  let fixture: ComponentFixture<FeatureBiometria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBiometria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBiometria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
