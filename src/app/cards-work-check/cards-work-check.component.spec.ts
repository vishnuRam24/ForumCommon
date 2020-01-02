import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWorkCheckComponent } from './cards-work-check.component';

describe('CardsWorkCheckComponent', () => {
  let component: CardsWorkCheckComponent;
  let fixture: ComponentFixture<CardsWorkCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsWorkCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsWorkCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
