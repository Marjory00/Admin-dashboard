import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons/buttons.component';
import { DialogOverviewComponent } from './dialogs/dialog-overview/dialog-overview.component';
import { BasicSnackBarComponent } from './dialogs/snack-bar/basic-snack-bar/basic-snack-bar.component';
import { HomeComponent } from './home/home/home.component';
import { ChipsAutoCompleteComponent } from './indicators/chips-auto-complete/chips-auto-complete.component';
import { ProgressBarComponent } from './indicators/progress-bar/progress-bar.component';
import { SpinnerComponent } from './indicators/spinner/spinner.component';
import { IndicatorsComponent } from './indicators/indicators/indicators.component';
import { OthersComponent } from './indicators/others/others.component';
import { BasicExpansionPanelComponent } from './panels/basic-expansion-panel/basic-expansion-panel.component';
import { ExpansionPanelAccordionComponent } from './panels/expansion-panel-accordion/expansion-panel-accordion.component';
import { PanelsComponent } from './panels/panels/panels.component';
import { StepperOverviewComponent } from './steppers/stepper-overview/stepper-overview.component';
import { SteppersComponent } from './steppers/steppers/steppers.component';
import { StepperVerticalComponent } from './steppers/stepper-vertical/stepper-vertical.component';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [
    ButtonsComponent,
    DialogOverviewComponent,
    BasicSnackBarComponent,
    HomeComponent,
    ChipsAutoCompleteComponent,
    ProgressBarComponent,
    SpinnerComponent,
    IndicatorsComponent,
    OthersComponent,
    BasicExpansionPanelComponent,
    ExpansionPanelAccordionComponent,
    PanelsComponent,
    StepperOverviewComponent,
    SteppersComponent,
    StepperVerticalComponent,
    TablesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MatComponentsModule { }
