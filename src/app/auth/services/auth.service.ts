import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/dashboard/models/usuario.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<Usuario | null>(null);
  public authUser$ = this._authUser$.asObservable();
  constructor(private httpClient: HttpClient, private router: Router) { }


}
