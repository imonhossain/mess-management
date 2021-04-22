import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/shared/base-data.services';

@Injectable({
  providedIn: 'root',
})
export class MealServices {
  constructor(private apiService: BaseDataService) {}

  public getUsers() {
    return this.apiService.get(`account/all-account-list`);
  }
  public getExpenses() {
    return this.apiService.get(`meal`);
  }

  public saveUser(params) {
    return this.apiService.request('POST', `meal`, params);
  }

  public updateUser(params) {
    return this.apiService.request('PUT', 'meal', params);
  }

  public deleteUser(id) {
    return this.apiService.request('DELETE', `meal/${id}`);
  }
}
