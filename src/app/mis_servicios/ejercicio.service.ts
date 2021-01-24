import { Injectable } from '@angular/core';
import { Ejercicio } from '../varios/ejercicio';
import { ejerciciosArray } from '../varios/collection-ejercicios';

@Injectable({
  providedIn: 'root',
})
export class EjercicioService {
  constructor() {}

  obtenerGetEjercicios(): Ejercicio[] {
    return ejerciciosArray;
  }
}
