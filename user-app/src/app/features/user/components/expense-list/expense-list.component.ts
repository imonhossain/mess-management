import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { CommonService } from 'src/app/shared/services/common.service';
import { ExpenseServices } from '../../services/expense.services';
import { UserServices } from '../../services/user.services';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  public expenseList = [];
  public users = [];
  public saveForm: FormGroup;
  public dataSaving = false;
  public totalAmount = 0;
  constructor(
    private expenseServices: ExpenseServices,
    private userService: UserServices,
    private fb: FormBuilder,
    private commonService: CommonService,
    private confirmationService: NgxBootstrapConfirmService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getAllAccounts();
    this.getAllUser();
  }
  getAllAccounts(): void {
    this.expenseList.length = 0;
    this.totalAmount = 0;
    this.expenseServices.getExpenses().subscribe((result) => {
      this.expenseList = JSON.parse(JSON.stringify(result));
      this.totalAmount = this.expenseList.reduce(
        (n, { amount }) => n + amount,
        0
      );
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
      amount: [0, Validators.required],
      expenseDate: [null, Validators.required],
      comment: [''],
    });
  }

  public onSubmit() {
    const saveObj = this.saveForm.value;
    if (saveObj.id) {
      this.expenseServices.saveUser(saveObj).subscribe((result) => {
        this.commonService.toastSuccess('Update successfully');
        this.getAllAccounts();
      });
    } else {
      delete saveObj.id;
      this.expenseServices.saveUser(this.saveForm.value).subscribe((result) => {
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
    this.expenseServices.deleteUser(id).subscribe((result) => {
      this.commonService.toastSuccess('Delete successfully');
      this.getAllAccounts();
    });
  }
}
