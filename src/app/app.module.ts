import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClient } from "@angular/common/http";
import { EsqueletoModule } from "./esqueleto/esqueleto.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EsqueletoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
