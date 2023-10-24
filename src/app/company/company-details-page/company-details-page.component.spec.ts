import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsPageComponent } from './company-details-page.component';

describe('CompanyDetailsPageComponent', () => {
  let component: CompanyDetailsPageComponent;
  let fixture: ComponentFixture<CompanyDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDetailsPageComponent]
    });
    fixture = TestBed.createComponent(CompanyDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
