// contador.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  // Mensaje de entrada que se le pasa al componente
  @Input() mensajeEntrada: string = '';

  // Contador que se muestra en el componente
  



  contador: number = 5;

  Aumentar() {
    this.contador++;
  }

  Decrementar() {
    this.contador--;
  }
}