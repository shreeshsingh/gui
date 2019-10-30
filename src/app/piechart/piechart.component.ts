
    import { Component, OnInit } from '@angular/core';  
    import { Chart } from 'chart.js';  
    import { HttpClient } from '@angular/common/http';  
    import { Data } from './Data';  
    @Component({  
      selector: 'app-piechart',  
      templateUrl: './piechart.component.html',  
      styleUrls: ['./piechart.component.css']  
    })  
    export class PiechartComponent implements OnInit {  
        title = 'app';  
        data: Data[];  
         
        url = 'http://localhost:4000/results';
        month = [];  
        price = [];  
        chart = [];  
        constructor(private httpClient: HttpClient) { }  
        
        ngOnInit() {  
          this.httpClient.get(this.url).subscribe((result: Data[]) => {  
            result.forEach(x => {  
              this.month.push(x.month);  
              this.price.push(x.price);  
            });  
            this  
            this.chart = new Chart('canvas2', {  
              type: 'pie',  
              data: {  
                labels: this.month,  
                datasets: [  
                  {  
                    data: this.price,  
                    borderColor: '#3cba9f',  
                    backgroundColor: [  
                      "#3cb371",  
                      "#0000FF",  
                      "#9966FF",  
                      "#4C4CFF",  
                      "#00FFFF",  
                      "#f990a7",  
                      "#aad2ed",  
                      "#FF00FF",  
                      "Blue"  
                        
                    ],  
                    fill: true  
                  }  
                ]  
              },  
              options: {  
                legend: {  
                  display: false
                },  
                scales: {  
                  xAxes: [{  
                    display: false  
                  }],  
                  yAxes: [{  
                    display: false 
                  }],  
                }  
              }  
            });  
          });  
        }  
      }  
