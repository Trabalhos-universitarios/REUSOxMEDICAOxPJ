import { Injectable } from '@angular/core';
import { colors } from 'src/colors/colors';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensagensAlertService {

  constructor() { }

  async mensagemComAcaoAlert(titulo?: string, texto?: string) {
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      iconColor: colors.$principal,
      showDenyButton: true,
      confirmButtonColor: colors.$principal,
      denyButtonColor: '#d33',
      confirmButtonText: 'CONFIRMAR',
      denyButtonText: 'CANCELAR'
    })
  }

  async mensagemComAcaoAlertTresBotoes(titulo?: string, texto?: string, button1?: string, button2?: string, button3?: string) {
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      iconColor: colors.$aprovado,
      showCancelButton: true,
      showDenyButton: true,
      showConfirmButton: true,
      cancelButtonText: button1,
      cancelButtonColor: colors.$vermelho,
      denyButtonText: button2,
      denyButtonColor: colors.$cinzaRascunho,
      confirmButtonText: button3,
      confirmButtonColor: colors.$aprovado,
    })
  }

  async mensagemDeErroAlert(titulo?: string, texto?: string) {
    await Swal.fire({
      icon: 'error',
      title: titulo,
      text: texto,
      confirmButtonColor: colors.$vermelho,
    })
  }

  async mensagemDeSucessoAlert(titulo?: string) {
    await Swal.fire({
      position: 'center',
      icon: 'success',
      iconColor: colors.$aprovado,
      title: titulo,
      showConfirmButton: false,
      timer: 1500
    })
  }

  close() {
    Swal.close();
  }
}
