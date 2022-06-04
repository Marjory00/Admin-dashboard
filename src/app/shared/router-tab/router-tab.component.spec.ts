import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTabComponent } from './router-tab.component';

describe('RouterTabComponent', () => {
  let component: RouterTabComponent;
  let fixture: ComponentFixture<RouterTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
