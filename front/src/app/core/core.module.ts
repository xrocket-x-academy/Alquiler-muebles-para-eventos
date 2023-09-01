import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './core-import.guard';

import { HttpClientModule } from '@angular/common/http';
import { IAuthService } from './interfaces/auth-service.interface';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: [{
    provide: IAuthService, useClass: AuthService
  }]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
