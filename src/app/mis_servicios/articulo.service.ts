import { Injectable } from '@angular/core';
import { ProdServ } from "../varios/producto-servicio";
import { relacionDeProdServ } from "../varios/relacion-prod-serv";

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor() { }

  obtenerGetArticulos(): ProdServ[]{
    return relacionDeProdServ;
  }
}
