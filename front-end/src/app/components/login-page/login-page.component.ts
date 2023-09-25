import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login-service/login.service';
import { MensagensAlertService } from 'src/app/services/mensagens-alert/mensagens-alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  hide: boolean = true;

  formularioLogin = this.formulario.group(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    }
  )


  constructor(
    private loginService: LoginService,
    private formulario: FormBuilder,
    private alert: MensagensAlertService) {
    console.log(this.habilitaBotaoLogin());

  }

  habilitaBotaoLogin() {
    return (this.formularioLogin.invalid);
  }

  async logar() {
    const resp = await this.enviarDados();

    if (resp) {
      this.alert.mensagemDeSucessoAlert('Login efetuado com sucesso!');
    } else {
      this.alert.mensagemDeErroAlert('ERRO', 'Usuário ou senha incorretos!')
    }
  }

  async enviarDados() {
    return await this.loginService.getUser(this.formularioLogin.value).toPromise();
  }

  getErrorMessage() {
    const emailControl = this.formularioLogin.get('email')?.valid;

    if (emailControl) {
      if (this.formularioLogin.value.email) {
        return 'You must enter a value';
      }

      return this.formularioLogin.controls.email.hasError('email') ? 'Not a valid email' : '';
    }

    return '';
  }


}
