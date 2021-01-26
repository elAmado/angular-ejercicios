import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjerciciosComponent } from './mis_componentes/ejercicios/ejercicios.component';
import { EjercicioDetDetComponent } from "./mis_componentes/ejercicio-det-det/ejercicio-det-det.component";

const routes: Routes = [
  { path: 'ejercicios', component: EjerciciosComponent }
  // { path: 'ejerciciosx', component: EjercicioDetDetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
