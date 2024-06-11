import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { userModel } from '../../shared/users.model';
import { FormsModule, NgModel } from '@angular/forms';
import { ListUsersService } from '../../services/list-users.service';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [NgFor, RouterLink, FormsModule, CommonModule],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: userModel[] = [];
  newUser: userModel;
  numEdit: number | null = null;

  constructor(private listUsersService: ListUsersService) {
    this.newUser = new userModel(
      new Date(), '', '', '', '', '', '', '', '', '', '', '', ''
    );
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.listUsersService.getUser().subscribe((response: userModel[]) => {
      this.listUsers = response;
    });
  }

  addUser() {
    this.listUsersService.addUser(this.newUser).subscribe(() => {
      this.getUsers();
      this.newUser = new userModel(new Date(), '', '', '', '', '', '', '', '', '', '', '', '');
    });
  }

  editUser(index: number) {
    this.numEdit = index;
  }

  saveUser() {
    if (this.numEdit !== null) {
      this.listUsersService.updateUser(this.listUsers[this.numEdit]).subscribe(() => {
        this.numEdit = null;
        this.getUsers();
      });
    }
  }

  deleteUser(index: number) {
    const cip = this.listUsers[index].cip;
    this.listUsersService.deleteUser(cip).subscribe(() => {
      this.getUsers();
    });
  }
}
