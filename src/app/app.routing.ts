import { Routes, RouterModule, Route } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ModuleWithProviders } from "@angular/core";
import { AdicionarComponent } from "./adicionar/adicionar.component";

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'adicionar', component: AdicionarComponent}
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(APP_ROUTES);