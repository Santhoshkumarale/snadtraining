import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", loadChildren: () => import('./home/home.module').then(x => x.HomeModule) },
  { path:"about", loadChildren: () => import('./about/about.module').then(x => x.AboutModule) },
  { path:"services", loadChildren: () => import('./services/services.module').then(x => x.ServicesModule) },
  { path:"contactus", loadChildren: () => import('./contact/contact.module').then(x => x.ContactModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
