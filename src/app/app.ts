import { Component } from '@angular/core';
import { Configuracion } from './modelos/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  titulo = 'Juego de adivinar número';

  config: Configuracion | null = null;
  numeroSecreto: number | null = null;
  juegoIniciado: boolean = false;

  onConfigCreada(config: Configuracion) {
    console.log('Config recibida en App:', config);
    this.config = config;
    this.juegoIniciado = true;
    this.numeroSecreto = Math.floor(Math.random() * config.rangoMaximo);
  }

  onJuegoTerminado() {
    console.log('Juego terminado');
    this.juegoIniciado = false; 
  }
}
