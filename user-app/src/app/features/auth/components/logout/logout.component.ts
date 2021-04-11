import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebStorageService } from '../../../../core/services/web-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private token: WebStorageService, 
    private router: Router
    ){

    }

  ngOnInit() {
    this.token.removeCookie();
    this.token.removeUserData();
    this.router.navigate(['auth']);
  }
}
