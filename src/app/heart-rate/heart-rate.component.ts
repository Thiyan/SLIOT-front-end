import { Data } from "./../models/Data";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heart-rate",
  templateUrl: "./heart-rate.component.html",
  styleUrls: ["./heart-rate.component.css"]
})
export class HeartRateComponent implements OnInit {
  data: Data;
  heartRate = 78;

  constructor() {}

  ngOnInit() {}
}
