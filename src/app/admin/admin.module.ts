import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './mat-grid/grid/grid.component';
import { AutoCompleteComponent } from './forms/auto-complete/auto-complete.component';
import { StatesGroupComponent } from './forms/auto-complete/states-group/states-group.component';
import { CheckboxComponent } from './forms/checkbox/checkbox.component';
import { DatepickerComponent } from './forms/datepicker/datepicker.component';
import { SelectedValueComponent } from './forms/datepicker/selected-value/selected-value.component';
import { HomeComponent } from './forms/home/home.component';
import { InputComponent } from './forms/input/input.component';
import { InputsComponent } from './forms/inputs/inputs.component';
import { OtherComponent } from './forms/other/other.component';
import { SliderComponent } from './forms/slider/slider.component';



@NgModule({
  declarations: [
    GridComponent,
    AutoCompleteComponent,
    StatesGroupComponent,
    CheckboxComponent,
    DatepickerComponent,
    SelectedValueComponent,
    HomeComponent,
    InputComponent,
    InputsComponent,
    OtherComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
