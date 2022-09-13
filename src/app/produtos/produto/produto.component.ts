import { Component, OnInit } from '@angular/core';
import { Produto } from '../../core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[]=[
    {id: 1, nomeproduto: 'Queijo'},
    {id: 2, nomeproduto: 'Salame'},
    {id: 3, nomeproduto: 'presunto'},
    {id: 4, nomeproduto: 'Pão'},
    {id: 5, nomeproduto: 'mortadela'}
  ];
  displayedColumns =['id','nomeproduto'];
  constructor() { }

  ngOnInit() {
  }

}
