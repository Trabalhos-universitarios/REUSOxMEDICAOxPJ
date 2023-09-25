import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login-service/login.service';

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
    private formulario: FormBuilder) {
    console.log(this.habilitaBotaoLogin());

  }

  habilitaBotaoLogin() {
    return (this.formularioLogin.invalid);
  }

  async enviarDados() {
    return await this.loginService.getUser(this.formularioLogin.value).toPromise().then((resp) => {
      console.log('resposta: ', resp);

    })
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
