import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentdetailspagePage } from './paymentdetailspage.page';

describe('PaymentdetailspagePage', () => {
  let component: PaymentdetailspagePage;
  let fixture: ComponentFixture<PaymentdetailspagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentdetailspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
