import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }	from '@angular/forms';

import { AppComponent } from './app.component';
import { IfComponent } from './if/if.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ComboComponent } from './combo/combo.component';
import { ArraysComponent } from './arrays/arrays.component';
import { ObjectArraysComponent } from './object-arrays/object-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    AboutMeComponent,
    ComboComponent,
    ArraysComponent,
    ObjectArraysComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
