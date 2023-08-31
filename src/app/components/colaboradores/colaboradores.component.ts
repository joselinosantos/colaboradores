import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/interface/colaborador';
import { ColaboradoresService } from 'src/app/service/colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  listaColaboradores: Array<Colaborador> = [];

  constructor(private colaboradoresService: ColaboradoresService) { }

  ngOnInit(): void {
    this.listaColaboradores = this.listarColaboradores();
  }

  listarColaboradores(): Array<Colaborador> {
    return this.colaboradoresService.getListaColaboradores();
  }

}
