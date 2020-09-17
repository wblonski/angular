import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZdarzenieComponent } from './component/zdarzenia/zdarzenie.component';
import { HttpClientModule} from '@angular/common/http';
import { ListaZdarzenComponent } from './component/lista-zdarzen/lista-zdarzen.component';

@NgModule({
  declarations: [
    AppComponent,
    ZdarzenieComponent,
    ListaZdarzenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
