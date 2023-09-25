import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { LoginService } from 'src/app/services/login-service/login.service';
import { MensagensAlertService } from 'src/app/services/mensagens-alert/mensagens-alert.service';
import { RegisterService } from 'src/app/services/register-service/register.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  hide: boolean = true;

  formularioformularioRegister = this.formulario.group(
    {
      name: new FormControl(null, Validators.required),
      specialty: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    }
  )


  constructor(
    private registerService: RegisterService,
    private formulario: FormBuilder,
    private alert: MensagensAlertService,
    private router: Router,
    private loading: LoadingService) {
    console.log(this.enableButtonLogin());

  }

  enableButtonLogin() {
    return (this.formularioformularioRegister.invalid || (this.formularioformularioRegister.value.password !== this.formularioformularioRegister.value.confirmPassword));
  }

  async register() {
    this.loading.isLoading = true;
    const resp = await this.submitData();

    if (resp) {
      this.alert.mensagemDeSucessoAlert('Login efetuado com sucesso!');

      this.router.navigate(['/login']);
      this.loading.isLoading = false;

    } else {
      this.loading.isLoading = false;
      this.alert.mensagemDeErroAlert('ERRO', 'Usuário ou senha incorretos!')
    }
  }

  async submitData() {
    return await this.registerService.setUser(this.formularioformularioRegister.value).toPromise();
  }
}
