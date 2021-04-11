import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebStorageService } from 'src/app/core/services/web-storage.service';
import { DevTrackConfigConstant } from 'src/app/shared/constant/devtrack-constants';
import { CommonService } from 'src/app/shared/services/common.service';
import { Registration, RegistrationResponse } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public saveForm: FormGroup;
  public dataSaving = false;
  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router,
    private commonService: CommonService,
    private webStorageService: WebStorageService
    ) { }

  ngOnInit(): void {
    if (this.webStorageService.getCookie()) {
      this.router.navigate(['/']);
    }
    this.createForm();
  }
  
  private createForm(): void {
    this.saveForm = this.fb.group({
      fullName: ['', Validators.required],
      email: [null, Validators.required],
      username: ['', Validators.required],
      imageUrl: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.required],
    }, { validators: this.authService.checkPasswords });
  }
  
  public onSubmit(){
    const userData:Registration = this.authService.createRegistrationModel(this.saveForm.value);
    this.authService.createAccount(userData).subscribe(result=>{
      console.log(typeof (result));
      const responseData: RegistrationResponse = JSON.parse(JSON.stringify(result));
      if (responseData.success){
        this.commonService.toastSuccess(responseData.message);
        this.router.navigate(['auth']);
      }else{
        this.commonService.toastError(responseData.message);
      }
    });
  }
}
