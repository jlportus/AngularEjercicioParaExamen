import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Partido } from "../moduls/partido";

@Component({
  selector: "app-partidos",
  templateUrl: "./partidos.component.html",
  styles: [],
})
export class PartidosComponent implements OnInit {
  public arrayDepartidos: Partido[] = [];

  constructor() {}

  ngOnInit() {
    this.arrayDepartidos = environment.partidos;
    // console.log(this.arrayDepartidos);
  }
}
