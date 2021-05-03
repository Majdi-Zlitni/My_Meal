import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RushComponent } from './rush.component';

describe('RushComponent', () => {
  let component: RushComponent;
  let fixture: ComponentFixture<RushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
