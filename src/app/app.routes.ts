import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'condo/sanfernando',
        loadChildren: () => import('./condoModules/san-fernando/san-fernando.module').then((m) => m.SanFernandoModule)
    },
    {
        path: 'condo/angeles',
        loadChildren: () => import('./condoModules/angeles/angeles.module').then((m) => m.AngelesModule)
    }
];
