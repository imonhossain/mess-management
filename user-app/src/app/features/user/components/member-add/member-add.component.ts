import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  constructor(
    private userService: UserServices,
    private fb: FormBuilder,
    private commonService: CommonService,
    private confirmationService: NgxBootstrapConfirmService
  ) {}

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject(): void {
    this.userList.length = 0;
    this.userService.getUsers().subscribe((result) => {
      // this.userList = result;
      // result = JSON.parse(JSON.stringify(result));
      // this.userList = result;
      console.log('result', typeof result);
      console.log('is arrya', isArray(result));
      if (result['success']) {
      }
    });
  }
}
