import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/shared/base-data.services';

@Injectable({
  providedIn: 'root',
})
export class ExpenseServices {
  constructor(private apiService: BaseDataService) {}

  public getUsers() {
    return this.apiService.get(`account/all-account-list`);
  }
  public getExpenses() {
    return this.apiService.get(`expense`);
  }

  public saveUser(params) {
    return this.apiService.request('POST', `expense`, params);
  }

  public updateUser(params) {
    return this.apiService.request('PUT', 'expense', params);
  }

  public deleteUser(id) {
    return this.apiService.request('DELETE', `expense/${id}`);
  }
}
