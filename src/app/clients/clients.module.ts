import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from "./client-page/client-page.component";
import { ClientFormComponent } from "./client-form/client-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ClientService } from './client.service';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientDetailsPageComponent } from './client-details-page/client-details-page.component';
import { ClientEditPageComponent } from './client-edit-page/client-edit-page.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientItemComponent } from './client-list/client-item/client-item.component';
import { ClientSearchPageComponent } from './client-search-page/client-search-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'clients/new',
    component: ClientPageComponent
  },
  {
    path: 'clients/search',
    component: ClientSearchPageComponent
  },
  {
    path: 'clients/details/:id',
    component: ClientDetailsPageComponent
  },
  {
    path: 'clients/edit/:id',
    component: ClientEditPageComponent
  }
];

@NgModule({
  declarations: [ClientPageComponent, ClientSearchPageComponent, ClientListComponent,
    ClientItemComponent,
    ClientDetailComponent,
    ClientDetailsPageComponent,
    ClientEditPageComponent, ClientFormComponent, ClientDetailComponent, ClientDetailsPageComponent, ClientEditPageComponent, ClientListComponent, ClientItemComponent, ClientSearchPageComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, CustomMaterialModule, FormsModule, RouterModule.forChild(routes)],
  providers: [ClientService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientsModule { }
