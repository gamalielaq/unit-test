import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from "@angular/core";
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIOS_ROUTS } from "./components/usuario/usuario.routs";

const ROUTES: Routes = [
    { path: '', pathMatch:'full', redirectTo:'home'},
    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: USUARIOS_ROUTS
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
    exports: [RouterModule]
})

export class FeatureRoutingModule {}
