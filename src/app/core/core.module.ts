import { SharedModule } from './../shared/shared.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';


@NgModule({
  imports: [SharedModule],
  declarations: [],

})

export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    core: CoreModule
  ) {
      if (core) {
        throw new Error('Core Module can only be imported to AppModule.');
      }
    }
}
