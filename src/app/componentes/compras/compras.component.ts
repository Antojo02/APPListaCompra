import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ComprasService } from '../../servicios/compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent  implements OnInit {
  listasCompras: string[] = [];
  nuevaCompra: string = "";
  //ViewChild es para que se pueda acceder a un elemento del html
  @ViewChild('btn') boton!: ElementRef;

  //el guion bajo es para indicar que es privado(servicios)
  private _comprasService= inject(ComprasService);
  title: any;

  constructor(){}

  //Este metodo es para que te salga la lista de compras al iniciar la pagina
  ngOnInit(): void {
    this.listasCompras = this._comprasService.getListaCompra();
  }
  
  agregarCompra(){
    this.listasCompras = this._comprasService.getListaCompra();
    this._comprasService.agregarCompra(this.nuevaCompra);
    this.listasCompras = this._comprasService.getListaCompra();
    this.nuevaCompra = '';
    this.boton.nativeElement.focus();
  }
  eliminarCompra(posicion: number){
    this._comprasService.eliminarCompra(posicion);
    this.listasCompras = this._comprasService.getListaCompra();
  }
}
