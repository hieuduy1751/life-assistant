import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoComponent } from './todo.component';
import { ListComponent } from './components/list/list.component';
import { TodoRoutingModule } from './todo-routing.module';


@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
