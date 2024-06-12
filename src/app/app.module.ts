import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './shared/components/parent/parent.component';
import { ChildComponent } from './shared/components/child/child.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './shared/components/todoForm/todoForm.component';
import { TodoListComponent } from './shared/components/todoList/todoList.component';
import { StdFormComponent } from './shared/components/stdForm/stdForm.component';
import { StdTableComponent } from './shared/components/stdTable/stdTable.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TodoFormComponent,
    TodoListComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
