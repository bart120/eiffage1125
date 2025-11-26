import { computed, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { UserModel } from '../models/user.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private isBrowser: boolean;

    private userSignal = signal<UserModel>({ id: 0, name: '', email: '', username: '' });

    private userToken: string = 'SDFSQDGFSFSQD0E9AT8IUGZJDSUA4289TOGFEIZSDUVDFG8Z';

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);

        if (this.isBrowser) {
            const userData = sessionStorage.getItem('USER');
            if (userData) {
                const user: UserModel = JSON.parse(userData);
                this.userSignal.set(user);
            }
        }
    }

    isConnected = computed(() => this.userSignal().id !== 0);

    login(login: string, password: string): void {
        // Simulate login
        const user = { id: 1, name: 'John Doe', email: 'johndoe@eiffage.com', username: login };
        this.userSignal.set(user);
        sessionStorage.setItem('USER', JSON.stringify(user));
    }

    logout(): void {
        this.userSignal.set({ id: 0, name: '', email: '', username: '' });
        sessionStorage.removeItem('USER');
    }

    getUser() {
        return this.userSignal;
    }

    getToken(): string {
        return this.userToken;
    }

}