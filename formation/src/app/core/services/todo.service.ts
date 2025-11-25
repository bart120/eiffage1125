import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TodoModel } from '../models/todo.model';
import { response } from 'express';
import { Observable } from 'rxjs';
@Injectable()
export class TodoService {

    //private httpClient: HttpClient;

    constructor(private httpClient: HttpClient) {
        //this.httpClient = httpClient;
    }

    getAllTodos(): Observable<Array<TodoModel>> {

        return this.httpClient.get<Array<TodoModel>>(`${environment.API_URL}/todos`);

    }

}