import { Component, OnInit } from '@angular/core';
import { Departamento } from '../model/Departamento';
import { DepartamentosService } from '../services/departamentos.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  isloading: boolean;
  exibeModal: boolean;

  deptoList: Departamento[];

  constructor(private srv: DepartamentosService) {

  }

  ngOnInit() {
    this.isloading = true;
    this.exibeModal = true;
    this.srv.getAllDepartamentos().subscribe(
      (res: Departamento[]) => {
        this.deptoList = res;
        this.isloading = false;
        //this.exibeModal = false;
      },
      (err) => {
        alert("Erro ao recuperar")
      }
    );


  }

}
