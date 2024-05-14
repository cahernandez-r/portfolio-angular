import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorComponent } from './components/primary-anchor/anchor.component';
import { ProjectComponent } from './components/project/project.component';



@NgModule({
  declarations: [
    AnchorComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnchorComponent,
    ProjectComponent
  ]
})
export class SharedModule { }
