import { Component, OnInit } from '@angular/core';
import { PrimeModule } from '../../core/prime.module';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
    standalone: true,
    imports: [PrimeModule, Menubar],
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
        },
        {
            label: 'Se connecter',
            icon: 'pi pi-sign-in',
            routerLink: '/auth/login'
        }
    ];


    constructor() { }

    ngOnInit() {

    }
}