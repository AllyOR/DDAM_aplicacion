import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor() { }

  public mensaje: string;
  public correo: string;
  public nombre: string;
  public msg = '';
  public list1: number[] = [1, 2, 3];
  list2: any[] = [
    {id: 1, nam:'Ali'},
    {id: 2, nam:'Ric'}
  ];

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];

  ngOnInit() {
  }
  public click(){
    console.log( this.nombre, this.correo ,this.mensaje);
    this.msg = 'Nombre: '+this.nombre+' \nCorreo: '+ this.correo+ " \nMensaje: " +this.mensaje;
    alert("Usuario registrado: \n"+ this.msg);
  }
}
