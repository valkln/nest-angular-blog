import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminGuard],
        canLoad: [AdminGuard],
      },
    ]),
  ],
  providers: [AdminGuard],
})
export class AdminModule {}
