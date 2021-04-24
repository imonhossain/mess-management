import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { CommonService } from 'src/app/shared/services/common.service';
import { ExpenseServices } from '../../services/expense.services';
import { MealServices } from '../../services/mealServices';
import { UserServices } from '../../services/user.services';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
})
export class MealListComponent implements OnInit {
  public mealList = [];
  public users = [];
  public saveForm: FormGroup;
  public dataSaving = false;
  public totalAmount = 0;
  constructor(
    private mealServices: MealServices,
    private userService: UserServices,
    private fb: FormBuilder,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getAllAccounts();
    this.getAllUser();
  }
  getAllAccounts(): void {
    this.mealList.length = 0;
    this.totalAmount = 0;
    this.mealServices.getMeals().subscribe((result) => {
      this.mealList = JSON.parse(JSON.stringify(result));
      this.totalAmount = this.mealList.reduce((n, { amount }) => n + amount, 0);
    });
  }
  getAllUser(): void {
    this.users.length = 0;
    this.userService.getUsers().subscribe((result) => {
      this.users = JSON.parse(JSON.stringify(result));
      console.log('this.users', this.users);
    });
  }

  private createForm(): void {
    this.saveForm = this.fb.group({
      id: [null],
      userId: ['', Validators.required],
      mealCount: [0, Validators.required],
      mealDate: [null, Validators.required],
    });
  }

  public onSubmit() {
    const saveObj = this.saveForm.value;
    if (saveObj.id) {
      this.mealServices.saveMeal(saveObj).subscribe((result) => {
        this.commonService.toastSuccess('Update successfully');
        this.getAllAccounts();
      });
    } else {
      delete saveObj.id;
      this.mealServices.saveMeal(this.saveForm.value).subscribe((result) => {
        this.commonService.toastSuccess('Save successfully');
        this.getAllAccounts();
      });
    }
  }
  onClickAddNew() {
    this.saveForm.reset();
  }
  onClickUpdate(item) {
    this.saveForm.patchValue(item);
  }
  onClickDelete(id) {
    this.mealServices.deleteMeal(id).subscribe((result) => {
      this.commonService.toastSuccess('Delete successfully');
      this.getAllAccounts();
    });
  }
}
