import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormularioComponent } from "./pessoa/formulario/formulario.component";
import { ListagemComponent } from "./pessoa/listagem/listagem.component";

export const routes: Routes = [
    {
        path: 'pessoa/listagem',
        component: ListagemComponent
    },
    {
        path: 'pessoa/editar',
        component: FormularioComponent
    },
    {
        path: 'pessoa/salvar',
        component: FormularioComponent
    },
    {
        path: 'pessoa/nova',
        component: FormularioComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}