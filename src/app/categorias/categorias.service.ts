import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly API ='/assets/categorias.json';

  constructor(private http: HttpClient) { }


  listCategorias() {
    return this.http.get<Categoria[]>(this.API);
  }

}
