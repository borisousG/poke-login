import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public authService : AuthService) {

  }

  ngOnInit(): void {
  }

  login(){
    this.authService.auth = true;
    localStorage.setItem('auth', this.authService.auth.toString());
  }

  logout(){
    this.authService.auth = false;
    localStorage.setItem('auth', this.authService.auth.toString());
  }

  showSession(){
    this.authService.checkAuth();
    return this.authService.auth;
  }

}
