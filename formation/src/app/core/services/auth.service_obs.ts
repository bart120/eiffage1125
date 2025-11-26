/*import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: UserModel = { mail: '', name: '', isConnected: false };


    private subjectUser = new BehaviorSubject<UserModel>(this.user);

    constructor() {
        if (sessionStorage.getItem('USER')) {
            this.user = JSON.parse(sessionStorage.getItem('USER') || "");
            this.subjectUser.next(this.user);
        }
    }

    get obsUser$(): Observable<UserModel> {
        return this.subjectUser.asObservable();
    }

    get userConnected(): UserModel {
        return this.user;
    }

    login(user: UserModel): void {
        this.user = user;
        this.subjectUser.next(user);
        sessionStorage.setItem('USER', JSON.stringify(this.user));
    }

    logout(): void {
        this.user = { mail: '', name: '', isConnected: false };
        this.subjectUser.next({ mail: '', name: '', isConnected: false });
        sessionStorage.clear();
    }

}*/