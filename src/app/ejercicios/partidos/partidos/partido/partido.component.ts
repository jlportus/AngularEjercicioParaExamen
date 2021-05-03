import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-partido",
  templateUrl: "./partido.component.html",
  styles: [],
})
export class PartidoComponent implements OnInit {
  public idLocal: string = ``;
  public idVisitante: string = ``;
  public competicion: string = ``;
  public resultado: string = ``;
  public visibilidadTarjetas: boolean;
  public tarjetas: string = ``;
  public claseObjeto = "alert alert-success";
  public estado: string = ``;

  constructor() {}

  ngOnInit() {
    this.idLocal = `local`;
    this.idVisitante = `visitante`;
    this.competicion = `laLiga`;
    this.resultado = `0-0`;
    this.tarjetas = `8 tarjetas`;
  }
  public mostrarTarjetas(): void {
    this.visibilidadTarjetas = !this.visibilidadTarjetas;
    console.log("esztas en el evento");
    console.log(this.estado);
  }
}
