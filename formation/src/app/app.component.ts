import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from "./shared/menu/menu.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { PrimeModule } from './core/prime.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeModule, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formation angular';
}
