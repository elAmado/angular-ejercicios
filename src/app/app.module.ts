import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjerciciosComponent } from './mis_componentes/ejercicios/ejercicios.component';
import { EjercicioDetComponent } from './mis_componentes/ejercicio-det/ejercicio-det.component';
import { EjercicioDetDetComponent } from './mis_componentes/ejercicio-det-det/ejercicio-det-det.component';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent,
    EjercicioDetComponent,
    EjercicioDetDetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
