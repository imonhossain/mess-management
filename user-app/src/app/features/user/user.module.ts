
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { StructureModule } from '../structure/structure.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserScreenlistComponent } from './components/user-screenlist/user-screenlist.component';
import { ProjectlistComponent } from './components/project-list/project-list.component';
import { NgxBootstrapConfirmModule } from 'ngx-bootstrap-confirm';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { MemberAddComponent } from './components/member-add/member-add.component';
import { DepositMoneyComponent } from './components/deposit-money/deposit-money.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BazarListComponent } from './components/bazar-list/bazar-list.component';

@NgModule({
    declarations: [
        UserComponent,
        UserScreenlistComponent,
        ProjectlistComponent,
        AdminDashboardComponent,
        MemberAddComponent,
        DepositMoneyComponent,
        BazarListComponent
    ],
    imports: [
        CommonModule,
        StructureModule,
        UserRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxBootstrapConfirmModule,
        ChartsModule,
        ModalModule.forRoot(),

    ],
    providers: [],
    bootstrap: [UserComponent]
})
export class UserModule { }
