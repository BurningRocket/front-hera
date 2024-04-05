import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CheckoutComponent } from './dashboard/checkout/checkout.component';
import { CadastroComponent } from './dashboard/cadastro/cadastro.component';
import { ClientesCadastradosComponent } from './dashboard/clientes-cadastrados/clientes-cadastrados.component';
import { LandingComponent } from './dashboard/landing/landing.component';

export const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "header",
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
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];
