import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/core/model';
import { ProdutosService } from '../produtos.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Observable<Produto[]>;
  displayedColumns = ['nomeproduto'];

  constructor(private produtosService: ProdutosService) {
    this.produtos = this.produtosService.listProdutos();
   }

  ngOnInit(): void {
  }

}
