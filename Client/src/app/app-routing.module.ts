import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registrationpage',
    loadChildren: () => import('./pages/registrationpage/registrationpage.module').then( m => m.RegistrationpagePageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./pages/loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'orderspage',
    loadChildren: () => import('./pages/orderspage/orderspage.module').then( m => m.OrderspagePageModule)
  },
  {
    path: 'wishlistpage',
    loadChildren: () => import('./pages/wishlistpage/wishlistpage.module').then( m => m.WishlistpagePageModule)
  },
  {
    path: 'addressbookpage',
    loadChildren: () => import('./pages/addressbookpage/addressbookpage.module').then( m => m.AddressbookpagePageModule)
  },
  {
    path: 'personaldetailspage',
    loadChildren: () => import('./pages/personaldetailspage/personaldetailspage.module').then( m => m.PersonaldetailspagePageModule)
  },
  {
    path: 'paymentdetailspage',
    loadChildren: () => import('./pages/paymentdetailspage/paymentdetailspage.module').then( m => m.PaymentdetailspagePageModule)
  },
  {
    path: 'cartpage',
    loadChildren: () => import('./pages/cartpage/cartpage.module').then( m => m.CartpagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
