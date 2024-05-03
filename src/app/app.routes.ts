import { Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
    {
        path:'app-button',
        component: ButtonComponent
    },
    {
        path: 'app-header',
        component: HeaderComponent
    },
    {
        path: 'app-about',
        component: AboutComponent
    },
    {
        path:'app-task-list',
        component: TaskListComponent
    },
    {
        path: 'app-task-list-2',
        component: TaskListComponent
    }
];
