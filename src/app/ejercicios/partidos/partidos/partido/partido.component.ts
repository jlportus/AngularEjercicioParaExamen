import { Component, Input, OnInit } from "@angular/core";
import { Partido } from "../../moduls/partido";
import { Suceso } from "../../moduls/suceso";

@Component({
  selector: "app-partido",
  templateUrl: "./partido.component.html",
  styles: [],
})
export class PartidoComponent implements OnInit {
  @Input() partido: Partido;

  public resultado: string = ``;
  public visibilidadTarjetas: boolean;
  public tarjetas: string = ``;
  public claseObjeto = "alert alert-success";
  public estado: string = ``;

  constructor() {}

  ngOnInit() {
    console.log(this.partido);
    this.resultado = this.calcularResultado();
    console.log(this.resultado);

    this.tarjetas = `8 tarjetas`;
  }

  public mostrarTarjetas(): void {
    this.visibilidadTarjetas = !this.visibilidadTarjetas;
    console.log("esztas en el evento");
    console.log(this.estado);
  }

  calcularResultado(): string {
    return (
      this.calcularEventosEquipo(this.partido.idVisitante, "Gol") +
      "-" +
      this.calcularEventosEquipo(this.partido.idLocal, "Gol")
    );
  }

  calcularEventosEquipo(idEquipo: string, evento: string): number {
    let numeroVecesEvento = 0;
    this.partido.sucesos.forEach((s: Suceso) => {
      console.log(s);
      console.log(s.idParticipante);
      if (s.class == evento && s.idParticipante == idEquipo) {
        console.log(true);
        numeroVecesEvento++;
      } else {
        console.log(false);
      }
    });
    return numeroVecesEvento;
  }
}
