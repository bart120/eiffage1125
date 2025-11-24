import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'app-footer',
    template: `<p>&copy; Eiffage</p>`
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}