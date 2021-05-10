import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';

@NgModule({
  declarations: [Component2Component, Component3Component, Component4Component],
  exports:[Component2Component, Component3Component, Component4Component],
  imports: [
    CommonModule
  ]
})
export class Module2Module { }
