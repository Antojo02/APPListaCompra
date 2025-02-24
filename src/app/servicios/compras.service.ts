import { Injectable, numberAttribute } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

 private storageKey: string = "listaCompra";

  constructor() { }

  getListaCompra(): string[]{
    return JSON.parse(localStorage.getItem(this.storageKey) as string) || [];
  }

  agregarCompra(nuevaCompra: string){
    let listaCompra = this.getListaCompra();
    listaCompra.push(nuevaCompra);
    localStorage.setItem(this.storageKey, JSON.stringify(listaCompra));
  }

  eliminarCompra(posicion: number){
    let listaCompra = this.getListaCompra();
    // elimina por posicion indicada
    listaCompra.splice(posicion, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(listaCompra));
  }

}

