import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from "./auth/auth.service";
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
        providers: [provideRouter(routes, withComponentInputBinding()), provideClientHydration(),
        AuthService
    ]
};
