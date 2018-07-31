import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { DateConversionPipe } from "./date-conversation.pipe";

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './date-conversation.pipe';
export * from './sample.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    DateConversionPipe
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
    DateConversionPipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
