import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PlotlyModule } from "angular-plotly.js";
import { RouterModule } from "@angular/router";

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
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PatientsComponent } from "./patients/patients.component";
import { PatientTabComponent } from "./patient-tab/patient-tab.component";
import { MqttDataService } from "./services/mqtt-data.service";

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
    UserImageComponent,
    NavBarComponent,
    PatientsComponent,
    PatientTabComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {
        path: " ",
        component: PatientsComponent
      },
      {
        path: "patient",
        component: SinglePatientComponent
      },
      {
        path: "**",
        component: PatientsComponent
      }
    ])
  ],
  providers: [MqttDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
