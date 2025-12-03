import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRelatorios } from './feature-relatorios';

describe('FeatureRelatorios', () => {
  let component: FeatureRelatorios;
  let fixture: ComponentFixture<FeatureRelatorios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureRelatorios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureRelatorios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
