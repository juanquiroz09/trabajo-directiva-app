import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Regisrto de Usuarios';
  message = "";
  registro = false;
  nombre : string = "";
  apellido: string = ""

  registroUsuario(){
    this.registro = true;
    this.message = "Usuario registrado correctamente"
  }
}
