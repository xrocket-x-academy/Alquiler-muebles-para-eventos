import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './core-import.guard';

import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponentComponent } from './pages/login-component/login-component.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    HomeComponent,
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [],
  providers: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
