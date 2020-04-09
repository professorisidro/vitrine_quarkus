import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-productsession',
  templateUrl: './productsession.component.html',
  styleUrls: ['./productsession.component.css']
})
export class ProductsessionComponent implements OnInit {
  isloading: boolean;
  produtoList: Produto[];

  constructor(private srv: ProdutosService) { }

  ngOnInit() {
    this.isloading = true;
    this.srv.getAllProducts().subscribe(
      (res: Produto[]) => {
        this.produtoList = res;
        this.isloading = false;
      },
      (err) => {
        alert("Erro ao recuperar")

      });
  }

}
