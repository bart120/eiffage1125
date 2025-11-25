import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from '../../core/services/todo.service';
import { PrimeModule } from '../../core/prime.module';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent
  ],
  providers: [
    TodoService
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    PrimeModule
  ]
})
export class TodoModule { }
