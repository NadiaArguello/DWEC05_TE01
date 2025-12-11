import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Configuracion } from '../modelos/configuracion';

@Component({
  selector: 'app-juego',
  standalone: false,
  templateUrl: './juego.html',
  styleUrl: './juego.css',
})
export class Juego {

private _config: Configuracion | null = null;

  @Input()
  set config(value: Configuracion | null) {
    this._config = value;

    if (value) {
      // Cada vez que recibimos configuración nueva, reiniciamos el juego
      this.intentosRestantes = value.numIntentos;
      this.resultado = '';
      this.intentoUsuario = null;
      this.haGanado = false;

      console.log('Config recibida en Juego:', value, 'Intentos:', this.intentosRestantes);
    }
  }

  get config(): Configuracion | null {
    return this._config;
  }

  @Input() numeroSecreto: number | null = null;
  @Input() juegoIniciado: boolean = false;
  @Output() juegoTerminado = new EventEmitter<void>(); 

  intentoUsuario: number | null = null;
  resultado: string = '';
  intentosRestantes: number = 0;
  haGanado: boolean = false;

  comprobarIntento() {
    if (this.intentoUsuario === null || this.numeroSecreto === null || !this.config) {
      return;
    }

    if (this.haGanado || this.intentosRestantes <= 0) {
      return;
    }

    this.intentosRestantes--;

    const intento = this.intentoUsuario;
    const secreto = this.numeroSecreto;

    if (intento === secreto) {
      this.resultado = 'ganado';
      this.haGanado = true;
      this.juegoTerminado.emit();
      return;
    }

    if (intento > secreto) {
      this.resultado = 'pasado';
    } else {
      const diff = secreto - intento;

      if (diff === 1) {
        this.resultado = 'caliente';
      } else if (diff === 2) {
        this.resultado = 'templado';
      } else {
        this.resultado = 'frio';
      }
    }

    if (this.intentosRestantes === 0 && !this.haGanado) {
      this.resultado = 'sin-intentos';
      this.juegoTerminado.emit();
    }
  }

}