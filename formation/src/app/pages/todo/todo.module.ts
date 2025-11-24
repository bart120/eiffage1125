import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoRoutingModule } from './todo-routing.module';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
