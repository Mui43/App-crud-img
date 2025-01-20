import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'showproduct',
    pathMatch: 'full',
  },
  {
    path: 'addproducts',
    loadComponent: () => import('./addproducts/addproducts.page').then( m => m.AddproductsPage)
  },
  {
    path: 'showproduct',
    loadComponent: () => import('./showproduct/showproduct.page').then( m => m.ShowproductPage)
  },
  {
    path: 'editproducts',
    loadComponent: () => import('./editproducts/editproducts.page').then( m => m.EditproductsPage)
  },
];
