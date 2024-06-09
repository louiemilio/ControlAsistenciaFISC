import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

interface UserReports {
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
  selector: 'app-employee-report',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, CommonModule],
  templateUrl: './employee-report.component.html',
  styleUrl: './employee-report.component.css'
})
export class EmployeeReportComponent {
  listUsers: UserReports[] = [];
  newUser: UserReports = {
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


  addReportEmployee() {
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

  editReportEmployee(index: number) {
    this.numEdit = index;
  }

  saveReportEmployee() {
    if (this.numEdit !== null) {
      this.listUsers[this.numEdit] = {...this.listUsers[this.numEdit]};
      this.numEdit = null;
    }
  }

  deleteReportEmployee(index: number) {
    this.listUsers.splice(index, 1);
  }
}
