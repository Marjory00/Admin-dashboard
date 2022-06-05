import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsRoutingModule } from './animations-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ]
})
export class AnimationsModule { }
