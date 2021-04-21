import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserScreenlistComponent } from './components/user-screenlist/user-screenlist.component';
import { AuthGuard } from 'src/app/core/guard/auth-guard';
import { ProjectlistComponent } from './components/project-list/project-list.component';
import { AuthGuardAdmin } from 'src/app/core/guard/auth-guard-admin';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MemberAddComponent } from './components/member-add/member-add.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { MealListComponent } from './components/meal-list/meal-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      // { path: 'dashboard', canActivate: [AuthGuard], component: UserDashboardComponent },
      { path: 'screen-list', component: UserScreenlistComponent },
      { path: 'project', component: ProjectlistComponent },
      { path: 'member-add', component: MemberAddComponent },
      { path: 'expense', component: ExpenseListComponent },
      { path: 'account', component: AccountListComponent },
      { path: 'meal', component: MealListComponent },
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      // { path: 'dashboard', canActivate: [AuthGuard], component: AdminDashboardComponent },
      // // { path: 'dashboard', canActivate: [AuthGuard], component: UserDashboardComponent },
      // { path: 'screen-list', canActivate: [AuthGuard], component: UserScreenlistComponent },
      // { path: 'project', canActivate: [AuthGuardAdmin], component: ProjectlistComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
