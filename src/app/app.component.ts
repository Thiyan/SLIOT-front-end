import { MqttDataService } from "./services/mqtt-data.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "senzgraph";

  constructor(private mqttDataService: MqttDataService) {}

  // send() {
  //   this.mqttDataService.sendMessage();
  // }
}
