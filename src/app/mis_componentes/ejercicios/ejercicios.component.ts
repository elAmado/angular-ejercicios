import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../../varios/ejercicio';
import { EjercicioService } from '../../mis_servicios/ejercicio.service';

@Component({
  selector: 'ipip-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
})
export class EjerciciosComponent implements OnInit {
  listaDeEjercicios: Ejercicio[];
  ejercicioSeleccionado: Ejercicio;

  constructor(private ejercicioService: EjercicioService) {}

  getEjerxs(): void {
    this.listaDeEjercicios = this.ejercicioService.obtenerGetEjercicios();
  }

  ngOnInit(): void {
    this.getEjerxs();
  }

  clickEnUnEjercicio(ejerClickeado: Ejercicio): void {
    console.log(ejerClickeado.id + '.- ' + ejerClickeado.name);
    this.ejercicioSeleccionado = ejerClickeado;
  }
}
