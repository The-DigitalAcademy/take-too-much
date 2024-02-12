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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
