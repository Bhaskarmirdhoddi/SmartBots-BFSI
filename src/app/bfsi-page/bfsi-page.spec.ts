import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfsiPage } from './bfsi-page';

describe('BfsiPage', () => {
  let component: BfsiPage;
  let fixture: ComponentFixture<BfsiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfsiPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BfsiPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
