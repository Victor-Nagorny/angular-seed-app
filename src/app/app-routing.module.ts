import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundPageComponent } from '@core/pages/not-found-page/not-found-page.component';
import { ForbiddenPageComponent } from '@core/pages/forbidden-page/forbidden-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },

  {
    path: 'clients',
    loadChildren: './pages/clients/clients.module#ClientsModule'
  },

  {
    path: '**',
    component: NotFoundPageComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
