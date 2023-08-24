import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartBlockComponent } from './cart-block/cart-block.component';
import {CardModule} from "./card/card.module";
import {FooterModule} from "./footer/footer.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CartBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FooterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
