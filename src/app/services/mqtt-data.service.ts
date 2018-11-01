import { Injectable, OnInit } from "@angular/core";
import { Paho } from "ng2-mqtt/mqttws31";

@Injectable({
  providedIn: "root"
})
export class MqttDataService {
  client;

  constructor() {
    this.client = new Paho.MQTT.Client(
      "broker.mqttdashboard.com",
      8000,
      "qwerty1234567890"
    );

    this.onMessage();
    this.onConnectionLost();
    this.client.connect({ onSuccess: this.onConnected.bind(this) });
  }

  onConnected() {
    console.log("Connected");
    this.client.subscribe("123456");
    this.sendMessage('{"I":"D1","T":36.5}');
  }

  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = "123456";
    this.client.send(packet);
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log("Message arrived : " + message.payloadString);
      JSON.parse(message.payloadString);
    };
  }

  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      console.log("Connection lost : " + JSON.stringify(responseObject));
    };
  }
}
