import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'addproducts',
    pathMatch: 'full',
  },
  {
    path: 'addproducts',
    loadComponent: () => import('./addproducts/addproducts.page').then( m => m.AddproductsPage)
  },
];
