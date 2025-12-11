import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Configuracion } from '../modelos/configuracion';

@Component({
  selector: 'app-parametros',
  standalone: false,
  templateUrl: './parametros.html',
  styleUrl: './parametros.css',
})
export class Parametros {
  private _juegoIniciado: boolean = false;

  @Input()
  set juegoIniciado(value: boolean) {
    this._juegoIniciado = value;
    console.log('juegoIniciado en Parametros =', value);
  }

  get juegoIniciado(): boolean {
    return this._juegoIniciado;
  }
  @Output() configCreada = new EventEmitter<Configuracion>();

  nombre: string = '';
  apellido: string = '';
  rangoMaximo: number = 0;
  numIntentos: number = 0;

  // Validaciones
  get nombreValido(): boolean {
    return this.nombre.trim().length > 0;
  }

  get apellidoValido(): boolean {
    return this.apellido.trim().length > 0;
  }

  get rangoValido(): boolean {
    return this.rangoMaximo !== null && this.rangoMaximo >= 4;
  }

  get intentosValidos(): boolean {
    return this.numIntentos !== null && this.numIntentos > 0;
  }

  get formularioValido(): boolean {
    return this.nombreValido && this.apellidoValido && this.rangoValido && this.intentosValidos;
  }

  iniciarJuego(): void {

    if (!this.formularioValido) return;

    const config = new Configuracion(
      this.nombre,
      this.apellido,
      this.rangoMaximo,
      this.numIntentos
    );

    console.log('Configuración creada en Parametros:', config);
    this.configCreada.emit(config);
  }
}

