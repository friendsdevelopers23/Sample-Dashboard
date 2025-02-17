import { Routes } from '@angular/router';

import { LoginComponent } from "./auth/login/login.component";
import { authGuardGuard } from "./auth/auth-guard.guard";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

export const routes: Routes = [
    
        { path: '', component:LoginComponent },
   
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
        canMatch: [authGuardGuard],component:DashboardComponent
    }
];
