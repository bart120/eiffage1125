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
        },
        {
            label: 'Todos',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Liste des todo',
                    icon: 'pi pi-list',
                },
                {
                    label: 'Ajouter todo',
                    icon: 'pi pi-plus',
                }
            ]
        }
    ];


    constructor() { }

    ngOnInit() {

    }
}