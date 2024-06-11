import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListUsersService } from '../../services/list-users.service';
import { userModel } from '../../shared/users.model';

@Component({
  selector: 'app-employee-report',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css']
})
export class EmployeeReportComponent implements OnInit {
  listUsers: userModel[] = [];

  constructor(private listUsersService: ListUsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.listUsersService.getUser().subscribe((response: userModel[]) => {
      this.listUsers = response;
    });
  }
}
