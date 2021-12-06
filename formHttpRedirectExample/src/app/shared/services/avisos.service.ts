import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AvisosService {
  mensaje: string;
  visible: boolean;
  constructor(private router: Router) {
    this.mensaje = '';
    this.visible = false;
  }

  showMessage(mensaje: string, route ?: string) {
    this.mensaje = mensaje;
    this.visible = true;
    this.waitToHideAndRoute(route);
  }


  hideMessage() {
    this.visible = false;
    this.mensaje = '';
  }

  /**
   * Espera 4 segundos antes de ocultar el mensaje
   */
  waitToHideAndRoute(route ?: string): void {
    setTimeout(() => {
      this.hideMessage();
      if(route != undefined) this.router.navigate([route]);
    }, 4000);
  }
}
