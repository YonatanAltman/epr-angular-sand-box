import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

/**
 * Here you declate all the routes that you want to render in
 * `app.component.html:
 * <router-outlet></router-outlet>`
 */

const routes: Routes = [
    {
        path: 'office', children: [

            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class OfficeRoutingModule { }
