import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { userModel } from '../../shared/users.model';
import { FormsModule, NgModel } from '@angular/forms';

interface User {
  fecha: string,
  nombre: string,
  apellido: string,
  cip: string,
  direccion: string,
  telefono: string,
  departamento: string,
  email: string,
  estatus: string,
  entrada: string,
  sal_alm: string,
  ent_alm: string,
  salida: string,
}

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {

  listUsers: User[] = [];
  newUser: User = {
    fecha: '',
    nombre: '',
    apellido: '',
    cip: '',
    direccion: '',
    telefono: '',
    departamento: '',
    email: '',
    estatus: '',
    entrada: '',
    sal_alm: '',
    ent_alm: '',
    salida: '',
  };
  numEdit: number | null = null;


  addUser() {
    this.listUsers.push({...this.newUser});
    this.newUser = {
      fecha: '',
      nombre: '',
      apellido: '',
      cip: '',
      direccion: '',
      telefono: '',
      departamento: '',
      email: '',
      estatus: '',
      entrada: '',
      sal_alm: '',
      ent_alm: '',
      salida: '',
    };
  }

  editUser(index: number) {
    this.numEdit = index;
  }

  saveUser() {
    if (this.numEdit !== null) {
      this.listUsers[this.numEdit] = {...this.listUsers[this.numEdit]};
      this.numEdit = null;
    }
  }

  deleteUser(index: number) {
    this.listUsers.splice(index, 1);
  }
}
