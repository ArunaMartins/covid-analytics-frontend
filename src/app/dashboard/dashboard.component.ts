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
	public graphEvoLines: ChartDataSets[] = [
		{ data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: ' ' },
		{ data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: ' ' },
		{ data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: ' ' },
	];

	// Rodapé do Gráfico
	public graphEvoFooter: Array<any> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	public graphEvoShowLegend: boolean = true; // Demonstra se vai ter a legenda ou não
	public graphEvoTipo: string = 'line'; // Tipo do Gráfico
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
