import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexCheckComponent } from './flex-check.component';

describe('FlexCheckComponent', () => {
  let component: FlexCheckComponent;
  let fixture: ComponentFixture<FlexCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
