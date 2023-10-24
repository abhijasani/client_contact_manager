import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFromComponent } from '../search/search-from/search-from.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
@NgModule({
  declarations: [SearchFromComponent],
  imports: [
    CommonModule, FormsModule,   ReactiveFormsModule , CustomMaterialModule],
  exports: [SearchFromComponent],
})
export class SharedModule { }
