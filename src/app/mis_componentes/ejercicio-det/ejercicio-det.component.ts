import { Component, Input } from '@angular/core';
import { Ejercicio } from '../../varios/ejercicio';
import { ProdServ } from "../../varios/producto-servicio";
import { relacionDeProdServ } from "../../varios/relacion-prod-serv";

@Component({
  selector: 'app-ejercicio-det',
  templateUrl: './ejercicio-det.component.html',
  styleUrls: ['./ejercicio-det.component.css'],
})
export class EjercicioDetComponent {
  listadoDeProdServ = relacionDeProdServ;

  prodServSeleccionado: ProdServ;
  otraPropiedadDeLaClase: string = "Edwin IP y Dey";

  @Input() ejercicioSelDetalle: Ejercicio;

  constructor() {}

  clickEnUnProdServ(produServiClickeado: ProdServ){
    this.prodServSeleccionado = produServiClickeado;
  }

}
