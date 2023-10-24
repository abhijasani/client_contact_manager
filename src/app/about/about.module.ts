import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '../about-page/about-page.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule, FormsModule,
    CustomMaterialModule
  ]
})
export class AboutModule { }
