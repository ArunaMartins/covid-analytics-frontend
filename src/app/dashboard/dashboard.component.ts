import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //DADOS DO GRÁFICO: Casos de Covid pelo Mundo ao Ano

  /** Propriedade das linhas do Gráfico
   *  https://www.npmjs.com/package/ng2-charts
   */
  public graphEvoLineProp: Array<any> = [
    {
      // Em Andamento - Azul Escuro #0d729c
      backgroundColor: 'rgba(13, 114, 156, 0)',
      borderColor: 'rgba(13, 114, 156, 1)',
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
      pointBorderColor: 'rgba(13, 114, 156, 1)',
      pointHoverBackgroundColor: 'rgba(13, 114, 156, 1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      // Casos Novos - Azul Claro #29b6c5
      backgroundColor: 'rgba(41, 182, 197, 0)',
      borderColor: 'rgba(41, 182, 197, 1)',
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
      pointBorderColor: 'rgba(41, 182, 197, 1)',
      pointHoverBackgroundColor: 'rgba(41, 182, 197, 1)',
      pointHoverBorderColor: 'rgba(41, 182, 197 ,1)',
    },
    {
      // Casos Encerrados - Laranja #ea9b3e
      backgroundColor: 'rgba(234, 155, 62, 0)',
      borderColor: 'rgba(234, 155, 62, 1)',
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
      pointBorderColor: 'rgba(234, 155, 62, 1)',
      pointHoverBackgroundColor: 'rgba(234, 155, 62, 1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];

  // Linha do Gráfico
  public lsLinhasPaises: ChartDataSets[] = [
    { data: [90, -5, 8, 6, 1, -6, -3, -5, 1, 4, 2, 0], label: 'Brazil' },
    { data: [-3, 70, 3, -3, 7, 2, -2, -3, -1, 2, 4, 3], label: 'India' },
    { data: [-3, 2, 3, -3, 7, 2, -2, -3, -1, 2, 4, 3], label: 'Russia' },
    { data: [-3, 3, 3, -3, 7, 2, -2, -3, -1, 2, 4, 3], label: 'South Africa' },
    {
      data: [-3, 47, 3, -3, 7, 200, -2, -3, -1, 2, 4, 3],
      label: 'United States',
    },
    { data: [-3, 5, 3, -3, 7, 2, -2, -3, -1, 2, 4, 3], label: 'Chile' },
    { data: [-3, 67, 4, -3, 7, 2, -2, -3, -1, 2, 4, 3], label: 'Pakistan' },
    { data: [-3, 27, 30, -3, 7, 2, -2, -3, -1, 2, 4, 3], label: 'Iran' },
    { data: [-3, 14, 50, -3, 7, 2, -2, -3, -1, 2, 4, 3], label: 'Italy' },
    { data: [-3, 47, 60, -3, 7, 2, -2, -3, -1, 2, 4, 3], label: 'France' },
    { data: [-3, 37, 3, -3, 10, 2, -2, -3, -1, 2, 4, 3], label: 'Spain' },
    { data: [-3, 76, 3, -3, 11, 2, -2, -3, -1, 2, 4, 3], label: 'New Zealand' },
    { data: [-3, 237, 3, -3, 17, 2, -2, -3, -1, 2, 4, 3], label: 'Australia' },
  ];
  // Rodapé do Gráfico
  public graphEvoFooter: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  public graphEvoShowLegend: boolean = true; // Demonstra se vai ter a legenda ou não
  public graphEvoTipo: string = 'bar'; // Tipo do Gráfico
  public graphEvoOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 7,
        borderWidth: 3,
        hitRadius: 5,
        hoverRadius: 10,
        hoverBorderWidth: 3,
      },
    },
    legend: { position: 'bottom' },
  };

  //DADOS DO GRÁFICO: Comparativo de Casos Covid pelo Mundo

  public pieChartComparativeGlobalLabels = [
    'Brazil',
    'India',
    'Russia',
    'United States',
    'South Africa',
    'Chile',
    'Pakistan',
    'Iran',
    'Italy',
    'France',
    'Spain',
    'New Zealand',
    'Australia',
  ];
  public pieChartComparativeGlobalData = [
    120,
    150,
    130,
    180,
    90,
    100,
    121,
    130,
    125,
    140,
    155,
    190,
    110,
  ];
  public pieChartComparativeGlobalType = 'pie';

  public pieChartComparativeGlobalOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 7,
        borderWidth: 3,
        hitRadius: 5,
        hoverRadius: 10,
        hoverBorderWidth: 3,
      },
    },
    legend: { position: 'bottom' },
  };

  //DADOS DO GRÁFICO: Evolução de Casos Covid pelo País

  public splineChartComparativeGlobalLabels = ['United States'];

  public lsLinhasPais: ChartDataSets[] = [
    {
      data: [-3, 47, 3, -3, 7, 200, -2, -3, -1, 2, 4, 3],
      label: 'United States',
    },
  ];

  public splineChartComparativeGlobalType = 'line';

  public splineChartComparativeGlobalOptions: any = {
    responsive: true,
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 7,
        borderWidth: 3,
        hitRadius: 5,
        hoverRadius: 10,
        hoverBorderWidth: 3,
      },
    },
    legend: { position: 'bottom' },
  };

  constructor() {}

  ngOnInit(): void {}
}
