
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from "./components/logout/logout.component";
import { RegistrationComponent } from "./components/registration/registration.component";


const routes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            
            { path: '',  component: LoginComponent },
            { path: 'login',  component: LoginComponent },
            { path: 'logout',  component: LogoutComponent },
            { path: 'registration',  component: RegistrationComponent },
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }