import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Generics } from '../core/generics';
import { HttpServiceService } from '../core/http-service.service';
import { PoSelectComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterContentInit {
  //DADOS DO GRÁFICO: Casos de Covid pelo Mundo ao Ano
  lsPeriodos = Generics.lsMesesConsulta;
  /** Propriedade das linhas do Gráfico
   *  https://www.npmjs.com/package/ng2-charts
   */
  graphEvoLineProp: Array<any> = [
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
  lsLinhasPaises: ChartDataSets[] = [];
  // Rodapé do Gráfico
  footerCasosCovidMundo: Array<any> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ];

  graphEvoShowLegend: boolean = true; // Demonstra se vai ter a legenda ou não
  graphEvoTipo: string = 'bar'; // Tipo do Gráfico
  graphEvoOptions: any = {
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

  pieChartComparativeGlobalLabels = [
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
  pieChartComparativeGlobalData = [
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
  pieChartComparativeGlobalType = 'pie';

  pieChartComparativeGlobalOptions: any = {
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

  splineChartComparativeGlobalLabels = ['United States'];

  lsLinhasPais: ChartDataSets[] = [
    {
      data: [-3, 47, 3, -3, 7, 200, -2, -3, -1, 2, 4, 3],
      label: 'United States',
    },
  ];

  splineChartComparativeGlobalType = 'line';

  splineChartComparativeGlobalOptions: any = {
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

  @ViewChild("selPeriodo", { static: true}) slPeriodo: PoSelectComponent;
  constructor(private http: HttpServiceService) {
    
  }
  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
    this.lsLinhasPaises = []
    let arrCountries = Generics.lsCountries;
    
    for (const country of arrCountries) {
      this.lsLinhasPaises.push({ data: [], label: country})
    }
  }

  changePeriodo(periodoSelecionado: string){
    const req = this.http.getPaises(periodoSelecionado, Generics.lsCountries)
    let arrPeriodo = periodoSelecionado.split('-')
    this.footerCasosCovidMundo = []
    this.lsLinhasPaises = []
    for (let index = 0; index < req.quantDias; index++) {
      let dia = '0' + (index+1).toString()
      let diaMes = ('0' + dia).substring(('0'+dia).length-2,('0'+dia).length) + '/' + arrPeriodo[1]
      this.footerCasosCovidMundo.push(diaMes)
    }
    
    req.observer.subscribe(
      (response: any)=>{
        response.forEach(medicaoPais => {
          let lsDados: Array<number> = []

          medicaoPais.periodos.forEach(periodo => {
            lsDados = [... lsDados, periodo.casos]
          });

          let newLine: ChartDataSets = {
            label: medicaoPais.nome,
            data: lsDados
          }

          this.lsLinhasPaises = [... this.lsLinhasPaises, newLine]
        });
      }
    )
  }
}
