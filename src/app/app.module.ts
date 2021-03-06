import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { EsqueletoModule } from "./esqueleto/esqueleto.module";
import { HomeModule } from "./comunes/home/home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EsqueletoModule, HomeModule, HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
