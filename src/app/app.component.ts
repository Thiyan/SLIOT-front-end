import { Component } from "@angular/core";
import { MqttDataService } from "./services/mqtt-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "senzgraph";

  constructor(mq: MqttDataService) {}

  // send() {
  //   this.mqttDataService.sendMessage();
  // }
}
