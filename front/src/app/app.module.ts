import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RentalCalculatorComponent } from './modules/rental-calculator/rental-calculator.component';
import { CoreModule } from './core/core.module';
import { DetailsFurnitureComponent } from './features/furniture/details-furniture/details-furniture.component';


@NgModule({
  declarations: [
    AppComponent,
    RentalCalculatorComponent,
    DetailsFurnitureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
