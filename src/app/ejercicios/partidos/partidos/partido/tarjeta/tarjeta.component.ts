import { Component, Input, OnInit } from "@angular/core";

import { Suceso } from "../../../moduls/suceso";
import { Tarjeta } from "../../../moduls/tarjeta";

@Component({
  selector: "app-tarjeta",
  templateUrl: "./tarjeta.component.html",
  styles: [],
})
export class TarjetaComponent implements OnInit {
  @Input() sucesos: Suceso[];
  @Input() idLocal: string;
  @Input() idVisitante: string;
  public amarillasLocal: number = 0;
  public rojasLocal: number = 0;
  public amarillasVisitante: number = 0;
  public rojasVisitante: number = 0;

  constructor() {}

  ngOnInit() {
    console.log(this.sucesos);
    this.calcularTarjetas();
  }
  
  calcularTarjetas() {
    this.sucesos.forEach((s: Tarjeta) => {
      if (s.class == "Tarjeta") {
        if (s.idParticipante == this.idLocal) {
          if ((s.tipoTarjeta = 1)) {
            this.rojasLocal++;
          } else {
            this.amarillasLocal++;
          }
        } else {
          if ((s.tipoTarjeta = 1)) {
            this.rojasVisitante++;
          } else {
            this.amarillasVisitante++;
          }
        }
      }
    });
  }
}
function s(s: any, arg1: (Tarjeta: any) => void) {
  throw new Error("Function not implemented.");
}
