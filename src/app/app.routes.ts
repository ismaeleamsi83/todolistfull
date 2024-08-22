import { Routes } from '@angular/router';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        loadChildren: () => import('./tasks/tasks.routes').then(m => m.TASKS_ROUTES),
        canActivate: [authGuard]
    },
    { 
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
     },
];
