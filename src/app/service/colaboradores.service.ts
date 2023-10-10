import { Injectable } from '@angular/core';
import { Colaborador } from '../interface/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {
  listaColaboradores: Array<Colaborador> = [
    {
      "id": 1,
      "name": "Bia Souza",
      "start": "12-06-2010",
      "function": "Desenvolvedora",
      "image": "colab1.jpeg",
    },
    {
      "id": 2,
      "name": "Jhon Alves",
      "start": "02-12-2016",
      "function": "Analista",
      "image": "colab2.jpeg",
    },
    {
      "id": 3,
      "name": "Roberto Mendes",
      "start": "10-07-2004",
      "function": "Engenheiro",
      "image": "colab3.jpeg",
    },
    {
      "id": 3,
      "name": "Valéria Silva",
      "start": "06-11-2009",
      "function": "UX",
      "image": "colab4.jpeg",
    },
    {
      "id": 4,
      "name": "Luciana Evelyn",
      "start": "20-04-2007",
      "function": "Gerente",
      "image": "colab5.jpeg",
    },
  ];

  constructor() { }

  getListaColaboradores() {
    return this.listaColaboradores;
  }
}
