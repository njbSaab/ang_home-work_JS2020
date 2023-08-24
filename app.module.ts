import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartBlockComponent } from './cart-block/cart-block.component';
import {CardModule} from "./card/card.module";

@NgModule({
  declarations: [
    AppComponent,
    CartBlockComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
