import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PartidosRoutingModule } from "./partidos-routing.module";
import { PartidosComponent } from "./partidos/partidos.component";
import { PartidoComponent } from "./partidos/partido/partido.component";
import { FormsModule } from "@angular/forms";
import { TarjetaComponent } from './partidos/partido/tarjeta/tarjeta.component';

@NgModule({
  declarations: [PartidosComponent, PartidoComponent, TarjetaComponent],
  imports: [CommonModule, PartidosRoutingModule, FormsModule],
})
export class PartidosModule {}
