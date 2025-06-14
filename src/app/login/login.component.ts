import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPage {

  router: Router;

constructor(router: Router) {
  this.router = router;
}

  goToDashboard(): void{
    this.router.navigate(['/dashboard']);
  }

  [x: string]: any;
  bienvenido: string = '¡Bienvenido!';
  mensajeBienvenida: string = 'Me alegra que estés de vuelta';
  correoOUsuario: string = 'Correo electrónico o usuario';
  contrasena: string = 'Contraseña';
  iniciarSesion: string = 'Iniciar sesión';
}