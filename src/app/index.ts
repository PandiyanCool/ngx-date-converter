import { NgModule } from '@angular/core';
import { DateConversionPipe } from './pipes/index';


@NgModule({
    exports: [NgXDateCoversionPipesModule]
})

export class NgXDateCoversionPipesModule { }

export * from './pipes/index';
