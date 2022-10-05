import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API ='/assets/produtos.json';

  constructor(private http: HttpClient) { }

  listProdutos() {
    return this.http.get<Produto[]>(this.API);
  }

}
