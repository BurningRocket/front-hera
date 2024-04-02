import { Routes } from '@angular/router';
import { AutoCompleteComponent } from './dashboard/layouts/auto-complete/auto-complete.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { DialogHeader2Component } from './dashboard/header/dialog-header2/dialog-header2.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CheckoutComponent } from './dashboard/checkout/checkout.component';
import { CadastroComponent } from './dashboard/cadastro/cadastro.component';
import { ClientesCadastradosComponent } from './dashboard/clientes-cadastrados/clientes-cadastrados.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"header",
        component: HeaderComponent
    },
    {
        path: "checkout",
        component: CheckoutComponent
    },
    {
        path: "cadastro",
        component: CadastroComponent
    },
    {
        path: "clientes-cadastrados",
        component: ClientesCadastradosComponent
    },
];
