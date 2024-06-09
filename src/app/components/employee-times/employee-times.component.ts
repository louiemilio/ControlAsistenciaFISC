import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface UserTimes {
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
  selector: 'app-employee-times',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, CommonModule],
  templateUrl: './employee-times.component.html',
  styleUrl: './employee-times.component.css'
})
export class EmployeeTimesComponent {
  listUsers: UserTimes[] = [];
  newUser: UserTimes = {
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


  addTimeEmployee() {
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

  editTimeEmployee(index: number) {
    this.numEdit = index;
  }

  saveTimeEmployee() {
    if (this.numEdit !== null) {
      this.listUsers[this.numEdit] = {...this.listUsers[this.numEdit]};
      this.numEdit = null;
    }
  }

  deleteTimeEmployee(index: number) {
    this.listUsers.splice(index, 1);
  }
}
