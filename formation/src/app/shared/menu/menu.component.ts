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
        }
    ];


    constructor() { }

    ngOnInit() {

    }
}