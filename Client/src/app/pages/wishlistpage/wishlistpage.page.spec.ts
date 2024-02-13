import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistpagePage } from './wishlistpage.page';

describe('WishlistpagePage', () => {
  let component: WishlistpagePage;
  let fixture: ComponentFixture<WishlistpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
