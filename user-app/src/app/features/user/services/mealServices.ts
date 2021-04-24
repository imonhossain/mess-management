import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/shared/base-data.services';

@Injectable({
  providedIn: 'root',
})
export class MealServices {
  constructor(private apiService: BaseDataService) {}
  public getMealUserWise(id) {
    return this.apiService.get(`meal/userwise/${id}`);
  }
  public getMeals() {
    return this.apiService.get(`meal`);
  }

  public saveMeal(params) {
    return this.apiService.request('POST', `meal`, params);
  }

  public updateMeal(params) {
    return this.apiService.request('PUT', 'meal', params);
  }

  public deleteMeal(id) {
    return this.apiService.request('DELETE', `meal/${id}`);
  }
}
