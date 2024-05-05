import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorComponent } from '../components/primary-anchor/anchor.component';



@NgModule({
  declarations: [
    AnchorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnchorComponent
  ]
})
export class SharedModule { }
