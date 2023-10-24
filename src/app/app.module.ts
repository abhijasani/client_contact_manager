import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyModule } from './company/company.module';
import { ClientsModule } from './clients/clients.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from '../app/custom-material/custom-material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { AboutModule } from './about/about.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './clients/client.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent,
    
    //  SearchFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClientsModule,
    CompanyModule,
    SharedModule,
    FormsModule,
    CustomMaterialModule,
    AboutModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule
    //  ReactiveFormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
