import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySmartbots } from './why-smartbots';

describe('WhySmartbots', () => {
  let component: WhySmartbots;
  let fixture: ComponentFixture<WhySmartbots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhySmartbots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhySmartbots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
