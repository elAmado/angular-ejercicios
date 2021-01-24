import { Component, Input, OnInit } from '@angular/core';
import { ProdServ } from 'src/app/varios/producto-servicio';

@Component({
  selector: 'app-ejercicio-det-det',
  templateUrl: './ejercicio-det-det.component.html',
  styleUrls: ['./ejercicio-det-det.component.css']
})
export class EjercicioDetDetComponent implements OnInit {

  @Input('xxx') equisequisequis: ProdServ;
  @Input('yyzz') yeyezetazeta: string;

  constructor() { }

  ngOnInit(): void {
  }

}
