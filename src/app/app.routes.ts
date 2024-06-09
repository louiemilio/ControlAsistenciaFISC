import { Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EmployeeTimesComponent } from './components/employee-times/employee-times.component';
import { EmployeeReportComponent } from './components/employee-report/employee-report.component';

export const routes: Routes = [
    { path: '', component: ListUsersComponent},
    { path: 'asistencia-empleados', component: EmployeeTimesComponent},
    { path: 'informe-empleados', component: EmployeeReportComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
