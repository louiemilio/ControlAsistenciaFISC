import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { userModel } from '../../shared/users.model';
import { ListUsersService } from '../../services/list-users.service';

@Component({
  selector: 'app-employee-times',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, CommonModule],
  templateUrl: './employee-times.component.html',
  styleUrls: ['./employee-times.component.css']
})
export class EmployeeTimesComponent implements OnInit {
  listUsers: userModel[] = [];
  numEdit: number | null = null;

  constructor(private listUsersService: ListUsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.listUsersService.getUser().subscribe((response: userModel[]) => {
      this.listUsers = response;
    });
  }

  editTimeEmployee(index: number) {
    this.numEdit = index;
  }

  saveTimeEmployee(index: number) {
    const userToUpdate = this.listUsers[index];
    this.listUsersService.updateUser(userToUpdate).subscribe(() => {
      this.numEdit = null;
      this.getUsers();
    });
  }
}
