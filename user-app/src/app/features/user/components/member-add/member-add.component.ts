import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxBootstrapConfirmService } from 'ngx-bootstrap-confirm';
import { CommonService } from 'src/app/shared/services/common.service';
import { isArray } from 'util';
import { UserServices } from '../../services/user.services';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css'],
})
export class MemberAddComponent implements OnInit {
  public userList = [];
  public saveForm: FormGroup;
  public dataSaving = false;
  constructor(
    private userService: UserServices,
    private fb: FormBuilder,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getAllProject();
  }

  getAllProject(): void {
    this.userList.length = 0;
    this.userService.getUsers().subscribe((result) => {
      this.userList = JSON.parse(JSON.stringify(result));
    });
  }

  private createForm(): void {
    this.saveForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      email: [null, Validators.required],
      mobile: ['', Validators.required],
      roll: ['user'],
      password: ['qweqwe', Validators.required],
    });
  }

  public onSubmit() {
    const saveObj = this.saveForm.value;
    if (saveObj.id) {
      this.userService.saveUser(saveObj).subscribe((result) => {
        this.commonService.toastSuccess('Update successfully');
        this.getAllProject();
      });
    } else {
      delete saveObj.id;
      this.userService.saveUser(this.saveForm.value).subscribe((result) => {
        this.commonService.toastSuccess('Save successfully');
        this.getAllProject();
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
    this.userService.deleteUser(id).subscribe((result) => {
      this.commonService.toastSuccess('Delete successfully');
      this.getAllProject();
    });
  }
}
