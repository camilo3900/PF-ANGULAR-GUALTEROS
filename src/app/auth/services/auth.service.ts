import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { LoginPayload } from 'src/app/dashboard/models/loginpayload.interface';
import { Usuario } from 'src/app/dashboard/models/usuario.class';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<Usuario | null>(null);
  public authUser$ = this._authUser$.asObservable();
  constructor(private httpClient: HttpClient, private router: Router) { }

 /* Inicio de sesion */
 login(payload: LoginPayload): void {
  /* Implementacion de peticion get */
  this.httpClient
    .get<Usuario[]>(
      `${environment.baseUrl}/users?correo=${payload.correo}&password=${payload.password}`
    )
    .subscribe({
      next: (response) => {
        if (!response.length) {
          alert('Usuario o contrasena invalidos');
        } else {
          const authUser = response[0];
          this._authUser$.next(authUser);
          localStorage.setItem('token', authUser.token!!)
          console.log("OK");

          this.router.navigate(['/dashboard/home']);
        }
      },

    });
}
/* Verifia el token */
verifyToken(): Observable<boolean> {
  return this.httpClient
    .get<Array<Usuario>>(
      `${environment.baseUrl}/users?token=${localStorage.getItem('token')}`
    )
    .pipe(
      map((users) => {
        if (!users.length) {
          return false;
        } else {
          const authUser = users[0];
          this._authUser$.next(authUser);
          /* Reescribimos el token */
          localStorage.setItem('token', authUser.token!!);
          return true;
        }
      })
    );
}
/* Para cerrar sesion */
logout(): void {
  this._authUser$.next(null);
  localStorage.removeItem('token');
  this.router.navigate(['/auth/login']);
}
}
