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
      { path: 'user-list', component: MemberAddComponent },
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
