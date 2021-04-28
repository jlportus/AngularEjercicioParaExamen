import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormularioRoutingModule } from "./formulario-routing.module";
import { FormularioComponent } from "./formulario.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FormularioComponent],
  imports: [CommonModule, FormularioRoutingModule, FormsModule],
  exports: [FormularioComponent],
})
export class FormularioModule {}
