import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyComponent } from './healthy.component';

describe('HealthyComponent', () => {
  let component: HealthyComponent;
  let fixture: ComponentFixture<HealthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
