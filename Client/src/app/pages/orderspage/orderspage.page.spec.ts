import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderspagePage } from './orderspage.page';

describe('OrderspagePage', () => {
  let component: OrderspagePage;
  let fixture: ComponentFixture<OrderspagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
