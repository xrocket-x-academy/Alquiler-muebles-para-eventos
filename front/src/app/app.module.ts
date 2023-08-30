import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FurnitureModule } from './features/furniture/furniture.module';
import { ListFurnitureComponent } from './features/furniture/list-furniture/list-furniture.component';
import { CardFurnitureComponent } from './features/furniture/card-furniture/card-furniture.component';
import { DetailsFurnitureComponent } from './features/furniture/details-furniture/details-furniture.component';
@NgModule({
  declarations: [
    AppComponent,
    ListFurnitureComponent,
    CardFurnitureComponent,
    DetailsFurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
