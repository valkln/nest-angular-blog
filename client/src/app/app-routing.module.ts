import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./home-page/home-page.module').then(
        (module) => module.HomePageModule,
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((module) => module.AdminModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then(
        (module) => module.NotFoundModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
