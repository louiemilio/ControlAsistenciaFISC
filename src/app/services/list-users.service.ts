import { Injectable } from '@angular/core';
import { userModel } from '../shared/users.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListUsersService {
  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<userModel[]>(`${this.BASE_URL}/list_users`);
  }
  getUserById(cip: string) {
    return this.http.get<userModel>(`${this.BASE_URL}/list_users/${cip}`);
  }
  addUser(user: userModel) {
    return this.http.post<string>(`${this.BASE_URL}/list_users/agregar`, user);
  }
  updateUser(user: userModel) {
    return this.http.put<string>(
      `${this.BASE_URL}/list_users/actualizar/${user.cip}`,
      user
    );
  }
  deleteUser(cip: string) {
    return this.http.delete<string>(
      `${this.BASE_URL}/list_users/borrar/${cip}`
    );
  }
}
