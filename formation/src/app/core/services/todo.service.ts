import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TodoModel } from '../models/todo.model';
import { response } from 'express';
import { firstValueFrom, lastValueFrom, map, mergeMap, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';


@Injectable()
export class TodoService {

    //private httpClient: HttpClient;

    constructor(private httpClient: HttpClient) {
        //this.httpClient = httpClient;
    }

    getAllTodos(): Observable<Array<TodoModel>> {

        return this.httpClient.get<Array<TodoModel>>(`${environment.API_URL}/todos`);

    }

    getTodosByUserId(userId: number): Observable<Array<TodoModel>> {
        return this.httpClient.get<Array<TodoModel>>(`${environment.API_URL}/todos`)
            .pipe(map(todos =>
                todos.filter(t => t.userId === userId)
                    .sort(this.compareTitles)));
        //.map(t => { t.user$ = this.getUserById(t.userId); return t; })));
    }


    async getTodosByUserIdAsync(userId: number): Promise<Array<TodoModel>> {
        return lastValueFrom(this.httpClient.get<Array<TodoModel>>(`${environment.API_URL}/todos`)
            .pipe(map(todos => todos.filter(t => t.userId === userId).sort(this.compareTitles))));
    }

    /*getAllTodos(): Observable<Array<TodoModel>> {

        return this.httpClient.get<Array<TodoModel>>(`${environment.API_URL}/todos`).pipe();

    }*/

    private compareTitles(t1: TodoModel, t2: TodoModel): number {
        return t1.title.localeCompare(t2.title);
    }

    getUserById(userId: number): Observable<UserModel> {
        return this.httpClient.get<UserModel>(`${environment.API_URL}/users/${userId}`);
    }

}
