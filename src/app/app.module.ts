import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LimpiadorEspaciosComponent } from './limpiador-espacios/limpiador-espacios.component';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {ClipboardModule} from 'ngx-clipboard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LimpiadorEspaciosComponent
  ],
    imports: [
        BrowserModule,
      BrowserAnimationsModule,
        AppRoutingModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right'
        }),
        FormsModule,
      ClipboardModule
    ],
  providers: [Clipboard],
  bootstrap: [AppComponent]
})
export class AppModule { }
