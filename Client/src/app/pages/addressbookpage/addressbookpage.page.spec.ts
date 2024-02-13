import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressbookpagePage } from './addressbookpage.page';

describe('AddressbookpagePage', () => {
  let component: AddressbookpagePage;
  let fixture: ComponentFixture<AddressbookpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressbookpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
