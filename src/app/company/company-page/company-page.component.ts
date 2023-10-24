import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Company } from "../company";
import { CompanyService } from "../company.service";

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent {
  companyList: any[] = [];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    //  this.companyService.getCompanyList().subscribe((res: any[]) => {
    this.companyService.getCompanyList().subscribe((res: Company[]) => {
      this.companyList = res;
    })
  }

  saveCompany(companyDetails: Company) {
    //  this.companyService.save(companyDetails).subscribe(company => {
    this.companyService.save(companyDetails).subscribe((company: Company) => {
      this.companyList.push(company);
      this.router.navigateByUrl('/company/search');

    })
  }
}
