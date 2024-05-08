import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrl: './hijo2.component.css'
})
export class Hijo2Component {
  @Input() mensajes: string[] = [];
  @Output() mensajeEnviado = new EventEmitter<string>();
  nuevoMensaje = '';

  enviarMensaje() {
    this.mensajeEnviado.emit(this.nuevoMensaje);
  }
}
