import { HeartRateComponent } from "./heart-rate/heart-rate.component";
import { delay } from "q";
import { Injectable, OnInit } from "@angular/core";
import { Paho } from "ng2-mqtt/mqttws31";
import { Data } from "./models/Data";

@Injectable({
  providedIn: "root"
})
export class MqttDataService implements OnInit {
  client;
  data: Data;
  mes = '{"I":"D1","T":36.5,"HR":45,"RR":23.8,"PPG":345,"S":"1"}';
  temp;

  ngOnInit() {}

  constructor() {
    // this.data = Data.getInstance();

    this.client = new Paho.MQTT.Client(
      "broker.mqttdashboard.com",
      8000,
      "yan-thiyan10"
    );
    this.onMessage();
    this.onConnectionLost();
    this.client.connect({ onSuccess: this.onConnected.bind(this) });
  }

  onConnected() {
    console.log("Connect");
    this.client.subscribe("123456");
    this.sendMessage(this.mes);
    delay(10000);
    this.sendMessage(this.mes);
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log("Message arrived : " + message.payloadString);
      console.log(JSON.parse(message.payloadString));
      // Object.assign(this.data, JSON.parse(message.payloadString));
      this.data = JSON.parse(message.payloadString);
      console.log("stored Successfully " + this.data);
      // console.log(this.d);
      // this.temp = JSON.parse(message.payloadString);
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
    return this.data.T;
  }

  getRespirationRate() {
    return this.data.RR;
  }
  getHeartRate() {
    return this.data.HR;
  }
  getPPG() {
    return this.data.PPG;
  }
}
