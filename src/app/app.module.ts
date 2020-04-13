import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import {FormsModule} from '@angular/forms';
import {ServerElementComponent} from './servers/serverElement/serverelement.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
