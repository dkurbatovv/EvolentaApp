import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent {
  single = [
    {
      name: 'Германия',
      value: 40632,
    },
    {
      name: 'США',
      value: 49737,
    },
    {
      name: 'Франция',
      value: 36745,
    },
    {
      name: 'Великобритания',
      value: 36240,
    },
    {
      name: 'Испания',
      value: 33000,
    },
    {
      name: 'Италия',
      value: 35800,
    },
  ];


  view: [number, number] = [1000, 600];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Страна';
  showYAxisLabel = true;
  yAxisLabel = 'Население';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelect(event: any): void {
    console.log(event);
  }
}
