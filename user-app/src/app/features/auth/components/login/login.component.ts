import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebStorageService } from '../../../../core/services/web-storage.service';
import { CommonService } from '../../../../shared/services/common.service';
import { LoginResponse } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public saveForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private commonService: CommonService,
    private webStorageService: WebStorageService
    ) { 

    }
  ngOnInit(): void {
    if (this.webStorageService.getCookie()) {
      this.router.navigate(['/']);
    }
    this.createForm();
  }

  private createForm(): void {
    this.saveForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    if (!this.saveForm.valid)
      return;
    
    const formValue = this.saveForm.value
    this.authService.authLogin(formValue.username, formValue.password).subscribe(result=>{
      console.log("result", result);
      const responseData: LoginResponse = JSON.parse(JSON.stringify(result));
      if (responseData.data.isSuccess){
        this.commonService.toastSuccess(responseData.message);
        this.webStorageService.setCookie()
        this.webStorageService.saveToken(responseData.data.token);
        this.webStorageService.saveUser(responseData.data);
        window.location.reload();
      }else{
        this.commonService.toastError(responseData.message);
      }
    });
  }
}
