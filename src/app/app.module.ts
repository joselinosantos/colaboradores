import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ColaboradoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
