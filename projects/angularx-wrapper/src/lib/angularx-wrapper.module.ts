import { NgModule } from '@angular/core';
import { AngularXWrapperComponent } from './angularx-wrapper.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AngularXWrapperComponent],
  imports: [
      CommonModule
  ],
  exports: [AngularXWrapperComponent]
})
export class AngularXWrapperModule { }
