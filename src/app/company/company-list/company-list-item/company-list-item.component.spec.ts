import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListItemComponent } from './company-list-item.component';

describe('CompanyListItemComponent', () => {
  let component: CompanyListItemComponent;
  let fixture: ComponentFixture<CompanyListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyListItemComponent]
    });
    fixture = TestBed.createComponent(CompanyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
