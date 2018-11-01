import { Component, OnInit, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-ppg-graph",
  templateUrl: "./ppg-graph.component.html",
  styleUrls: ["./ppg-graph.component.css"]
})
export class PpgGraphComponent implements OnInit {
  @ViewChild("lineChart")
  private chartRef;
  chart: any;
  a = 36.5;

  dataPoints = [{ x: new Date(), y: 36.5 }];

  constructor() {}

  ngOnInit() {
    this.draw();
    this.add();
  }

  onClick() {
    console.log("Button Clicked");
    this.dataPoints.push({ x: new Date(), y: this.a });
    console.log(this.dataPoints);
    this.chart.update();
    // this.c+=1;
    // this.d*=3;;
    // this.a.push(this.c);
    // this.b.push(this.d);
    // this.basicChart();
  }

  add() {
    delay(200);
    this.dataPoints.push({ x: new Date(), y: 400 });
    this.chart.update();
    delay(200);

    this.dataPoints.push({ x: new Date(), y: 337 });
    this.chart.update();
    delay(200);

    this.dataPoints.push({ x: new Date(), y: 573 });
    this.chart.update();
    delay(200);

    this.dataPoints.push({ x: new Date(), y: 445 });
    this.chart.update();
    delay(200);

    this.dataPoints.push({ x: new Date(), y: 650 });
    this.chart.update();
    delay(200);

    this.dataPoints.push({ x: new Date(), y: 720 });
    this.chart.update();
    delay(200);

    this.dataPoints.push({ x: new Date(), y: 448 });
    this.chart.update();
    delay(200);

    this.dataPoints.push({ x: new Date(), y: 589 });
    this.chart.update();
    delay(200);
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
