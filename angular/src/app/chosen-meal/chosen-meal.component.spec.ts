import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenMealComponent } from './chosen-meal.component';

describe('ChosenMealComponent', () => {
  let component: ChosenMealComponent;
  let fixture: ComponentFixture<ChosenMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
