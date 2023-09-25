import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading/loading.service';
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
    private alert: MensagensAlertService,
    private loading: LoadingService,
    private router: Router) {
    console.log(this.habilitaBotaoLogin());

  }

  habilitaBotaoLogin() {
    return (this.formularioLogin.invalid);
  }

  async logar() {
    this.loading.isLoading = true;
    const resp = await this.enviarDados();

    if (resp) {
      this.alert.mensagemDeSucessoAlert('Login efetuado com sucesso!');
      this.loading.isLoading = false;
      this.router.navigate(['/user-page'])
    } else {
      this.alert.mensagemDeErroAlert('ERRO', 'Usuário ou senha incorretos!')
      this.loading.isLoading = false;
    }
  }

  async enviarDados() {
    return await this.loginService.getUser(this.formularioLogin.value).toPromise();
  }
}
