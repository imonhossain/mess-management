import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/shared/base-data.services';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private apiService: BaseDataService) {}

  public getUsers() {
    return this.apiService.get(`user`);
  }
  public getUserById(id) {
    return this.apiService.get(`user/${id}`);
  }

  public saveUser(params) {
    return this.apiService.request('POST', `user`, params);
  }

  public updateUser(params) {
    return this.apiService.request('PUT', 'user', params);
  }

  public deleteUser(id) {
    return this.apiService.request('DELETE', `user/${id}`);
  }
}
