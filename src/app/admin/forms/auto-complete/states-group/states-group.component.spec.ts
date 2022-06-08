import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesGroupComponent } from './states-group.component';

describe('StatesGroupComponent', () => {
  let component: StatesGroupComponent;
  let fixture: ComponentFixture<StatesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
