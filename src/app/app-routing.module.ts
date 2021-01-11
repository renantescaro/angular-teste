import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormularioComponent } from "./pessoa/formulario/formulario.component";
import { ListagemComponent } from "./pessoa/listagem/listagem.component";

export const routes: Routes = [
    {
        path: '',
        component: ListagemComponent
    },
    {
        path: 'editar',
        component: FormularioComponent
    },
    {
        path: 'salvar',
        component: FormularioComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}