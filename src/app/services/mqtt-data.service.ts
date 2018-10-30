import { Injectable, OnInit } from "@angular/core";
import { Paho } from "ng2-mqtt/mqttws31";

@Injectable({
  providedIn: "root"
})
export class MqttDataService implements OnInit {
  client;
  data;

  ngOnInit() {}

  constructor() {
    this.client = new Paho.MQTT.Client(
      "broker.mqttdashboard.com",
      8000,
      "yan-thiyan2"
    );

    this.onMessage();
    this.onConnectionLost();
    this.client.connect({ onSuccess: this.onConnected.bind(this) });
  }

  onConnected() {
    console.log("Connected");
    this.client.subscribe("123456");
    // this.sendMessage("HelloWorld");
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log("Message arrived : " + message.payloadString);
      this.data = message.payloadString;
    };
  }

  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log("Connection lost : " + JSON.stringify(responseObject));
    };
  }

  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = "123456";
    this.client.send(packet);
  }

  /*===================================================================
  ======================For Service calls==============================
  =====================================================================*/

  getTemperature() {
    return;
  }

  getRespirationRate() {}
  getHeartRate() {}
  getPPG() {}
}
