import { Component, inject, OnInit, signal } from '@angular/core';
import { PrimeModule } from '../../core/prime.module';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { AuthService } from '../../core/services/auth.service';
import { sign } from 'crypto';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [PrimeModule, Menubar, RouterModule],
    selector: 'app-menu',
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {
    items: MenuItem[] = [
        {
            label: 'Accueil',
            icon: 'pi pi-home',
            routerLink: '/'
        },
        {
            label: 'Todos',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Liste des todo',
                    icon: 'pi pi-list',
                    routerLink: '/todos'
                },
                {
                    label: 'Ajouter todo',
                    icon: 'pi pi-plus',
                    routerLink: '/todos/add'
                }
            ]
        }
    ];

    authServ: AuthService = inject(AuthService);
    //isConnected = this.authServ.isConnected;

    constructor() { }

    ngOnInit() {

    }
}