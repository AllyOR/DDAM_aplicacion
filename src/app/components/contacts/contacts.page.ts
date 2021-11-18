import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor() { }

  public mensaje: string;
  correo: string;
  nombre: string;
  msg = '';

  ngOnInit() {
  }
  public click(){

    console.log( this.nombre, this.correo ,this.mensaje);
    this.msg = 'Nombre: '+this.nombre+' \nCorreo: '+ this.correo+" \nMensaje: "+this.mensaje
    alert("Usuario registrado:\n"+ this.msg);

  }
}
