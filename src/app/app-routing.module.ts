import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ClientsModule } from './clients/clients.module';
import { CompanyModule } from './company/company.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'clients/new',
    loadChildren: () => import('./clients/clients.module').then(x => x.ClientsModule)

  },
  {
    path: 'clients/edit/:id',
    loadChildren: () => import('./clients/clients.module').then(x => x.ClientsModule)
  },

  {
    path: 'clients/search',
    loadChildren: () => import('./clients/clients.module').then(x => x.ClientsModule)
  },
  {
    path: 'clients/details/:id',
    loadChildren: () => import('./clients/clients.module').then(x => x.ClientsModule)
  },
  {
    path: 'company/new',
    loadChildren: () => import('./company/company.module').then(x => x.CompanyModule)
  },
  {
    path: 'company/search',
    loadChildren: () => import('./company/company.module').then(x => x.CompanyModule)
  },
  {
    path: 'company/details/:id',
    loadChildren: () => import('./company/company.module').then(x => x.CompanyModule)
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '',
    redirectTo: '/clients/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ClientsModule, CompanyModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
