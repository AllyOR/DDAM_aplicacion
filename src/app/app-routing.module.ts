import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'options',
    loadChildren: () => import('./components/options/options.module').then(m => m.OptionsPageModule)
  },
  {
    path: 'quieto',
    loadChildren: () => import('./components/sections/quieto/quieto.module').then( m => m.QuietoPageModule)
  },
  {
    path: 'salto',
    loadChildren: () => import('./components/sections/salto/salto.module').then( m => m.SaltoPageModule)
  },
  {
    path: 'muerto',
    loadChildren: () => import('./components/sections/muerto/muerto.module').then( m => m.MuertoPageModule)
  },
  {
    path: 'volver',
    loadChildren: () => import('./components/sections/volver/volver.module').then( m => m.VolverPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./components/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
