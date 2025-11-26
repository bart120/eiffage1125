import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) { }

    getAllUsers(): Observable<Array<UserModel>> {
        return this.httpClient.get<Array<UserModel>>(`${environment.API_URL}/users`);
    }

}