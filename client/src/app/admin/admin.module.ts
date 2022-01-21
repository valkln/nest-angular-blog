import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AuthComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'auth',
        component: AuthComponent,
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
