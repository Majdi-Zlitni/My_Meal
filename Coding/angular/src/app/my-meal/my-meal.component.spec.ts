import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMealComponent } from './my-meal.component';

describe('MyMealComponent', () => {
  let component: MyMealComponent;
  let fixture: ComponentFixture<MyMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

