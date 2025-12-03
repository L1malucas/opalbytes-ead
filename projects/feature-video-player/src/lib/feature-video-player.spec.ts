import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureVideoPlayer } from './feature-video-player';

describe('FeatureVideoPlayer', () => {
  let component: FeatureVideoPlayer;
  let fixture: ComponentFixture<FeatureVideoPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureVideoPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureVideoPlayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
