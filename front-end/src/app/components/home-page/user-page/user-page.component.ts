import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/login.service';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  userData: any; // Defina o tipo de userData conforme necessário


  constructor(private loginService: LoginService,
              private authorizationService: AuthorizationService) { }

  ngOnInit() {
    // Chame o método getUser do LoginService para obter o userData
    this.userData = {specialty: "Cardiologia"}
   
  }

  logOut(){
      this.authorizationService.logOut()
  }
}