import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	// Dados Gráfico
	// Linha do Gráfico
	public lsLinhasEstado: ChartDataSets[] = [
		{ data: [1, 2, -5, 4, -10,  7, -9,  4, -2, -3, -1, 2], label: 'SP' },
		{ data: [9, -5, 8, 6,   1, -6, -3, -5, 1, 4, 2, 0], label: 'RJ' },
		{ data: [-3, 7, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'SC' }/*,
		{ data: [-3, 2, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'AA' },
		{ data: [-3, 3, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'BB' },
		{ data: [-3, 47, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'CC' },
		{ data: [-3, 5, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'DD' },
		{ data: [-3, 67, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'ES' },
		{ data: [-3, 27, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'DA' },
		{ data: [-3, 14, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'SC' },
		{ data: [-3, 47, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'DS' },
		{ data: [-3, 37, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'CS' },
		{ data: [-3, 76, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'AF' },
		{ data: [-3, 237, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'TT' },
		{ data: [-3, 317, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'WW' },
		{ data: [-3, 72, 3, -3,  7,  2, -2, -3, -1, 2, 4, 3], label: 'EE' }*/
	];
	// Rodapé do Gráfico
	public graphEvoFooter: Array<any> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

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
				borderWidth: 2,
				hitRadius: 5,
				hoverRadius: 10,
				hoverBorderWidth: 2,
			},
		},
		legend: { position: 'bottom' },
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
