import { Component, Input,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrl: './hijo1.component.css'
})
export class Hijo1Component {
  nuevoMensaje = '';
  @Input() mensajes: string[] = [];
  @Output() mensajeEnviado = new EventEmitter<string>();

  enviarMensaje() {
    this.mensajeEnviado.emit(this.nuevoMensaje);
  }
}
