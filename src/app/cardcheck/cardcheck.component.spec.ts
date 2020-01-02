import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcheckComponent } from './cardcheck.component';

describe('CardcheckComponent', () => {
  let component: CardcheckComponent;
  let fixture: ComponentFixture<CardcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
