import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSearchPageComponent } from './client-search-page.component';

describe('ClientSearchPageComponent', () => {
  let component: ClientSearchPageComponent;
  let fixture: ComponentFixture<ClientSearchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientSearchPageComponent]
    });
    fixture = TestBed.createComponent(ClientSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
