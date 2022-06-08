import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelAccordionComponent } from './expansion-panel-accordion.component';

describe('ExpansionPanelAccordionComponent', () => {
  let component: ExpansionPanelAccordionComponent;
  let fixture: ComponentFixture<ExpansionPanelAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionPanelAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
