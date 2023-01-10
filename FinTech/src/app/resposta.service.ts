import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IResposta } from './IResposta';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  constructor(private httpClient:HttpClient) { }

  todasRespostas(){
    return this.httpClient.get<IResposta[]>('https://63adaa123e46516916609bd0.mockapi.io/api/teste1/resposta').toPromise();
  }

  verificarResposta(resposta:IResposta){
      return this.httpClient.post<any>('http://localhost:3000/respostas ', resposta).toPromise();
  }
}