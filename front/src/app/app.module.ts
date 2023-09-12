import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FurnitureModule } from './features/furniture/furniture.module';
import { RentalCalculatorComponent } from './modules/rental-calculator/rental-calculator.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    RentalCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FurnitureModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
