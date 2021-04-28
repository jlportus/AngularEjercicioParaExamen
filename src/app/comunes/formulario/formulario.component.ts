import { Component, OnInit } from "@angular/core";
import { Persona } from "src/app/moduls/persona";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styles: [],
})
export class FormularioComponent implements OnInit {
  public persona: Persona;
  public personas: Persona[];
  public situacionLaboral: { id: number; descripcion: string }[];

  constructor() {}

  ngOnInit() {
    this.persona = {
      nombre: ``,
      mail: ``,
      nif: ``,
      telefono: 0,
      situacionLaboral: ``,
    };
    this.personas = [];
    this.situacionLaboral = [
      { id: 0, descripcion: "desconocido" },
      { id: 1, descripcion: "Galgo" },
      { id: 2, descripcion: "Parado" },
      { id: 3, descripcion: "Levantador de Paises" },
    ];
  }

  public salvarPersona() {
    this.personas.push(this.persona);
    console.log(this.persona);
  }
}
