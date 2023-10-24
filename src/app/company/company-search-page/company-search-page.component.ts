import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-company-search-page',
  templateUrl: './company-search-page.component.html',
  styleUrls: ['./company-search-page.component.css']
})
export class CompanySearchPageComponent {
  companyList: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadCompanyList();
  }

  searchCompanyHandler(term: any): void {
    console.log(term);
    if (term) {
      this.searchCompany(term);
    } else {
      this.loadCompanyList();
    }
  }

  private loadCompanyList(): void {
    //  this.companyService.getCompanyList().subscribe((result: any) => {
    this.companyService.getCompanyList().subscribe((result: Company[]) => {
      this.companyList = result;
    });
  }

  private searchCompany(term: string): void {
    // this.companyService.search(term).subscribe((results: any) => {
    this.companyService.search(term).subscribe((results: Company[]) => {
      this.companyList = results;
    });
  }
}
