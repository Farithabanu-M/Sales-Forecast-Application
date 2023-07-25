import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, NgZone, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Tooltip, ArcElement, PieController, LineController, LineElement, PointElement, LinearScale, Title, BarElement, BarController } from 'chart.js';
import { CategoryScale } from 'chart.js';
Chart.register(Tooltip, CategoryScale,LineController, LineElement, PointElement, LinearScale, Title,  BarElement, BarController, PieController, ArcElement);

@Component({
  selector: 'app-machinelearning',
  templateUrl: './machinelearning.component.html',
  styleUrls: ['./machinelearning.component.css'],
})
export class MachinelearningComponent {
  salesdata: any |undefined;
  period: String | undefined;
  noofperiod: String | undefined;
  backgroundcolor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ];
  bordercolor = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ];
  @ViewChild('mychart') mychart:any;
  @ViewChild('mychart1') mychart1:any;
  canvas:any;
  ctx:any;
  showchart=false;
  showpredicted=false;
  constructor(private _http: HttpClient, private elementRef: ElementRef) {}
  ngOnInit() {
    this.period = '';
    this.noofperiod = '';
    this.showchart=false;
    this.showpredicted=false;
  }
  
  public onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file, file.name);
    this._http.post('http://127.0.0.1:5000', formData).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  print() {
    this._http.get<any>('http://127.0.0.1:5000/predicted').subscribe(data=>{
      this.salesdata = data;
      // console.log(this.salesdata)
    });
    this.showchart=true;
  }

  display() {
    this.showchart=true;
    this.showpredicted=false;
    const filteredDates = this.salesdata.Dates.filter((date: String) => date >= "2014-01-01" && date <= "2017-12-31");
    var legendHtml = [];
    legendHtml.push('<ul class="chart-legend">');
    const canvas = document.getElementById('mychart') as HTMLCanvasElement;
    let htmlRef = this.elementRef.nativeElement.querySelector(`#mychart`);
    this.mychart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: filteredDates,
        datasets: [{
          data: this.salesdata.Sales,
          backgroundColor: this.backgroundcolor,
          borderColor: this.bordercolor,
          borderWidth: 1,
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            padding: {
              top: 10,
              bottom: 30
            },
            font: {
              weight: 'bold',
              family: 'Arial',
              size: 20
            }
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Dates',
              font: {
                weight: 'bold',
                family: 'Arial',
                size: 14
              }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Sales',
              font: {
                weight: 'bold',
                family: 'Arial',
                size: 14
              }
            }
          }
        }
      }
    });
  }
  display1() {
    this.showchart=false;
    this.showpredicted=true;
    const filteredDates = this.salesdata.Dates.filter((date: String) => date >= "2018-01-01" && date <= "2019");
    var legendHtml = [];
    legendHtml.push('<ul class="chart-legend">');
    const canvas = document.getElementById('mychart1') as HTMLCanvasElement;
    let htmlRef = this.elementRef.nativeElement.querySelector(`#mychart1`);
    this.mychart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: filteredDates,
        datasets: [{
          data: this.salesdata.Sales,
          backgroundColor: this.backgroundcolor,
          borderColor: this.bordercolor,
          borderWidth: 1,
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            padding: {
              top: 10,
              bottom: 30
            },
            font: {
              weight: 'bold',
              family: 'Arial',
              size: 20
            }
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Dates',
              font: {
                weight: 'bold',
                family: 'Arial',
                size: 14
              }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Sales',
              font: {
                weight: 'bold',
                family: 'Arial',
                size: 14
              }
            }
          }
        }
      }
    });
  }
}
