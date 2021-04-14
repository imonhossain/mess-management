
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('../app/features/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => import('../app/features/user/user.module').then(m => m.UserModule),
    },
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

