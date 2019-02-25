import { BrowserModule }	from '@angular/platform-browser';
import { NgModule }			from '@angular/core';
import { FormsModule }		from '@angular/forms';

import { AppComponent }		from './app.component';
import { ListComponent }	from './list/list.component';
import { InputComponent } from './input/input.component';
import { AddComponent } from './add/add.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputComponent,
    AddComponent,
    TasksComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
