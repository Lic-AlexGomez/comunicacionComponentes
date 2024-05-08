import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensajes1: string[] = [];
  mensajes2: string[] = [];

  recibirMensaje(mensaje: string, receptor: number) {
    if (receptor === 1) {
      this.mensajes1.push(mensaje);
    } else if (receptor === 2) {
      this.mensajes2.push(mensaje);
    }
  }

  constructor() {}

}
