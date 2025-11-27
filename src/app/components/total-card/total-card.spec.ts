import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCard } from './total-card';

describe('TotalCard', () => {
  let component: TotalCard;
  let fixture: ComponentFixture<TotalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
