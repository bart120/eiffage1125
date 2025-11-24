import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
//import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
//import { TodoAddComponent } from './pages/todo/todo-add/todo-add.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    //{ path: 'todos', component: TodoListComponent, },
    //{ path: 'todos/add', component: TodoAddComponent },
    { path: 'todos', loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule) },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];
