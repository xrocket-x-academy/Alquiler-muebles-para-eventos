import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CoreModule } from './core/core.module';
import { ListFurnitureComponent } from './features/furniture/list-furniture/list-furniture.component';
import { CardFurnitureComponent } from './features/furniture/card-furniture/card-furniture.component';
import { DetailsFurnitureComponent } from './features/furniture/details-furniture/details-furniture.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListFurnitureComponent,
    CardFurnitureComponent,
    DetailsFurnitureComponent
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


