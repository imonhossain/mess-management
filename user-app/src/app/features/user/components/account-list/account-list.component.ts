import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { CommonService } from 'src/app/shared/services/common.service';
import { isArray } from 'util';
import { AccountServices } from '../../services/accounts.service';
import { UserServices } from '../../services/user.services';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  public accountList = [];
  public users = [];
  public saveForm: FormGroup;
  public dataSaving = false;
  public totalAmount = 0;
  constructor(
    private accountServices: AccountServices,
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
    this.accountList.length = 0;
    this.accountServices.getAccounts().subscribe((result) => {
      this.accountList = JSON.parse(JSON.stringify(result));
      this.totalAmount = this.accountList.reduce(
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
      depositDate: [null, Validators.required],
      comment: [''],
    });
  }

  public onSubmit() {
    const saveObj = this.saveForm.value;
    if (saveObj.id) {
      this.accountServices.saveUser(saveObj).subscribe((result) => {
        this.commonService.toastSuccess('Update successfully');
        this.getAllAccounts();
      });
    } else {
      delete saveObj.id;
      this.accountServices.saveUser(this.saveForm.value).subscribe((result) => {
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
    this.accountServices.deleteUser(id).subscribe((result) => {
      this.commonService.toastSuccess('Delete successfully');
      this.getAllAccounts();
    });
  }
}
