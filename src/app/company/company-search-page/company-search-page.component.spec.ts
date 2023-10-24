import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySearchPageComponent } from './company-search-page.component';

describe('CompanySearchPageComponent', () => {
  let component: CompanySearchPageComponent;
  let fixture: ComponentFixture<CompanySearchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySearchPageComponent]
    });
    fixture = TestBed.createComponent(CompanySearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
