import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    //importProvidersFrom(AuthenticationModule),
    provideRouter(routes),
    importProvidersFrom(NoopAnimationsModule),
    provideClientHydration(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
