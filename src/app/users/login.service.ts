import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './_login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    // Appelez l'API de connexion avec les informations d'identification et obtenez un jeton
    return this.http.post<User>('https://apimocha.com/essai/example', user);
  }
}
