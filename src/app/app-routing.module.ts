import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./comunes/home/home/home.component";
import { EsqueletoComponent } from "./esqueleto/esqueleto.component";
import { NoEncontradoComponent } from "./esqueleto/no-encontrado/no-encontrado.component";

const routes: Routes = [
  {
    path: ``,
    component: HomeComponent,
  },
  {
    path: `acerca`,
    loadChildren: () =>
      import("src/app/comunes/acerca/acerca.module").then(
        (m) => m.AcercaModule
      ),
  },
  {
    path: `formulario`,
    loadChildren: () =>
      import("src/app/comunes/formulario/formulario.module").then(
        (m) => m.FormularioModule
      ),
  },
  {
    path: `partidos`,
    loadChildren: () =>
      import("src/app/ejercicios/partidos/partidos.module").then(
        (m) => m.PartidosModule
      ),
  },
  {
    path: `**`,
    redirectTo: `not-found`,
  },
  {
    path: `not-found`,
    component: NoEncontradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
