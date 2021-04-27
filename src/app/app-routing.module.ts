import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EsqueletoComponent } from "./esqueleto/esqueleto.component";
import { NoEncontradoComponent } from "./esqueleto/no-encontrado/no-encontrado.component";

const routes: Routes = [
  // {
  //   path: ``,
  //   component: EsqueletoComponent,
  // },
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
