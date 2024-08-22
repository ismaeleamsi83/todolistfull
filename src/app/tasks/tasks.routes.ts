import { Routes } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { TaskcreateComponent } from './taskcreate/taskcreate.component';
import { TaskeditComponent } from './taskedit/taskedit.component';

export const TASKS_ROUTES: Routes = [
    {
        path: '',
        component: TasklistComponent
    },
    {
        path: 'create',
        component: TaskcreateComponent
    },
    {
        path: ':id',
        component: TaskdetailComponent
    },
    {
        path: ':id/edit',
        component: TaskeditComponent
    }
];