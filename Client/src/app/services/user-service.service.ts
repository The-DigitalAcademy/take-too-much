import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../Interfaces/user-interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../Interfaces/login';


@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  SERVER_URL: string = environment.SERVER_URL;

  userData?: UserInterface;

  Users: any;

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(login: Login): Observable<UserInterface> {return this.http.post<UserInterface>(`${this.SERVER_URL}/api/user/register`,login);}



}
