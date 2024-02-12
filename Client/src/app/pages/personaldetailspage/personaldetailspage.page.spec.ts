import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaldetailspagePage } from './personaldetailspage.page';

describe('PersonaldetailspagePage', () => {
  let component: PersonaldetailspagePage;
  let fixture: ComponentFixture<PersonaldetailspagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldetailspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
