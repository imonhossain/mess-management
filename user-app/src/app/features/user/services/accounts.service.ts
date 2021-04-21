import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/shared/base-data.services';

@Injectable({
  providedIn: 'root',
})
export class AccountServices {
  constructor(private apiService: BaseDataService) {}

  public getUsers() {
    return this.apiService.get(`account/all-account-list`);
  }

  public saveUser(params) {
    return this.apiService.request('POST', `account`, params);
  }

  public updateUser(params) {
    return this.apiService.request('PUT', 'account', params);
  }

  public deleteUser(id) {
    return this.apiService.request('DELETE', `account/${id}`);
  }
}
