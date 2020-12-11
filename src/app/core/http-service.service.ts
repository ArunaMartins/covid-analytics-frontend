import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Generics } from './generics';

@Injectable({
	providedIn: 'root'
})
export class HttpServiceService {
	private 
	constructor(private http: HttpClient) { }

	setQueryParams(periodo: string, paises: string): { httpParams: HttpParams, quantidadeDias: number }{
		let params= new HttpParams();
		let arrPeriodo = Generics.calcPeriodo(periodo);
		params = params.append("paises", paises)
		params = params.append("periodoDe", arrPeriodo.dataInicial.toISOString().substring(0,10))
		params = params.append("periodoAte", arrPeriodo.dataFinal.toISOString().substring(0,10))

		return { httpParams: params, quantidadeDias: arrPeriodo.quant }
	}

	getPaises(periodo: string, paises: Array<string> ){
		let arrParams = this.setQueryParams(periodo, paises.join(',') )
		return { observer: this.http.get('/cov/pais', { params: arrParams.httpParams }), quantDias: arrParams.quantidadeDias }
	}

}
