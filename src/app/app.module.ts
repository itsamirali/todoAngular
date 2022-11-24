import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { HttpClientModule } from '@angular/common/http'
import { TodoService } from './shared/todo.service';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
