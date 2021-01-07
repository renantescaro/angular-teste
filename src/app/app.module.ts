import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListagemComponent } from './pessoa/listagem/listagem.component';
import { ItemComponent } from './pessoa/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListagemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
