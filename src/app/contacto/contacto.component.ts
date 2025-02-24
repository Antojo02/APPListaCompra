// contacto.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviarFormulario() {
    console.log('Formulario enviado:', this.contacto);
  }
}