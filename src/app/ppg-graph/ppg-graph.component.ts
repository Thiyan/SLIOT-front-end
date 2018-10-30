import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { tick } from "@angular/core/src/render3";

@Component({
  selector: "app-ppg-graph",
  templateUrl: "./ppg-graph.component.html",
  styleUrls: ["./ppg-graph.component.css"]
})
export class PpgGraphComponent implements OnInit {
  @ViewChild("lineChart")
  private chartRef;
  chart: any;
  a = 30;

  dataPoints = [
    { x: new Date(), y: 10 },
    { x: new Date(), y: 20 },
    { x: new Date(), y: 25 }
  ];

  constructor() {}

  ngOnInit() {
    this.draw();
  }

  onClick() {
    console.log("Button Clicked");
    this.dataPoints.push({ x: new Date(), y: this.a + 0.5 });
    console.log(this.dataPoints);
    this.chart.update();
    // this.c+=1;
    // this.d*=3;;
    // this.a.push(this.c);
    // this.b.push(this.d);
    // this.basicChart();
  }

  draw() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "line",

      data: {
        // labels: ["1", "2"], // your labels array
        datasets: [
          {
            data: this.dataPoints, // your data array
            borderColor: "#00AEFF",
            fill: true,
            // backgroundColor: "red",
            // xAxisID="Time",
            borderWidth: 2.5,
            // borderDash:[5,4],
            // borderDashOffset:5,
            // borderCapStyle:"",
            cubicInterpolationMode: "monotone",
            // pointBackgroundColor: "red",
            // pointBorderColor: "black",
            // pointBorderWidth: 0,
            pointRadius: 0,
            // pointStyle: "rectRounded",
            // pointRotation:"45",
            spanGaps: true
            // tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        animation: {
          duration: 250 * 1.5,
          easing: "linear"
        },
        title: {
          display: true,
          text: "PPG",
          position: "top",
          fontSize: 25,
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial',sans-serif",
          fontColor: "#666",
          padding: 20
        },

        legend: {
          display: false
        },

        scales: {
          xAxes: [
            {
              display: true,
              // distribution: "series",
              bounds: "data",
              type: "time"
              // time: {
              //   // unit: "millisecond"
              //   // format: "timeFormat"
              // }
            }
          ],
          yAxes: [
            {
              // display: true
              // ticks: {
              //   max: 1,
              //   min: -1
              // }
            }
          ]
        },
        elements: {}
      }
    });
  }
}
