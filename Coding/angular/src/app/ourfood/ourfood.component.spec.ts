import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfoodComponent } from './ourfood.component';

describe('OurfoodComponent', () => {
  let component: OurfoodComponent;
  let fixture: ComponentFixture<OurfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
