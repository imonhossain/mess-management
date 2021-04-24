import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { MealServices } from '../../services/mealServices';
import { UserServices } from '../../services/user.services';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css'],
})
export class MealDetailsComponent implements OnInit {
  public userId = null;
  public user;
  public mealList = [];
  public totalMeal = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mealServices: MealServices,
    private userService: UserServices,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      this.getMealDetails();
      this.getUser();
    });
  }
  getUser() {
    this.userService.getUserById(this.userId).subscribe((result) => {
      this.user = JSON.parse(JSON.stringify(result));
      console.log('result', result);
    });
  }
  getMealDetails() {
    this.mealServices.getMealUserWise(this.userId).subscribe((result) => {
      this.mealList = JSON.parse(JSON.stringify(result));
      this.totalMeal = this.mealList.reduce(
        (n, { mealCount }) => n + mealCount,
        0
      );
    });
  }
  onClickDelete(id) {
    this.mealServices.deleteMeal(id).subscribe((result) => {
      this.commonService.toastSuccess('Delete successfully');
      this.getMealDetails();
    });
  }
}
