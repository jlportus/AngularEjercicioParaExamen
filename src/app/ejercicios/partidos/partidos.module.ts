import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PartidosRoutingModule } from "./partidos-routing.module";
import { PartidosComponent } from "./partidos/partidos.component";
import { PartidoComponent } from "./partidos/partido/partido.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PartidosComponent, PartidoComponent],
  imports: [CommonModule, PartidosRoutingModule, FormsModule],
})
export class PartidosModule {}
