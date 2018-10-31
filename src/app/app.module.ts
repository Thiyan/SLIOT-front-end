import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PlotlyModule } from "angular-plotly.js";

import { AppComponent } from "./app.component";
import { TempGraphComponent } from "./temp-graph/temp-graph.component";
import { from } from "rxjs";
import { PpgGraphComponent } from "./ppg-graph/ppg-graph.component";
import { HeartRateComponent } from "./heart-rate/heart-rate.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { SinglePatientComponent } from "./single-patient/single-patient.component";
import { RespirationRateComponent } from "./respiration-rate/respiration-rate.component";

import { TemGraphComponent } from "./tem-graph/tem-graph.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserImageComponent } from "./user-image/user-image.component";

@NgModule({
  declarations: [
    AppComponent,
    TempGraphComponent,
    PpgGraphComponent,
    HeartRateComponent,
    SinglePatientComponent,
    RespirationRateComponent,
    TemGraphComponent,
    UserDetailsComponent,
    UserImageComponent
  ],
  imports: [BrowserModule, PlotlyModule, AngularFontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
