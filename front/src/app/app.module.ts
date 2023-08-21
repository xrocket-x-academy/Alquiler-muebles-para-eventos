import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardFurnitureComponent } from './features/furniture/card-furniture/card-furniture.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardFurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

