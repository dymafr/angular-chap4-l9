import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FruitComponent } from "./fruit/fruit.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, FruitComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
