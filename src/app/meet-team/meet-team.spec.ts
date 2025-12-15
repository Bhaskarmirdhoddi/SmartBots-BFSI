import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTeam } from './meet-team';

describe('MeetTeam', () => {
  let component: MeetTeam;
  let fixture: ComponentFixture<MeetTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetTeam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
