import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() {}

  login(email: string, password: string): Observable<any> {
   
    if (email === 'sabiha@mail.com' && password === '12345') {
      return of({
        result: true,
        message: 'Login successful',
        token: 'mock-jwt-token'
      });
    } else {
      return of({
        result: false,
        message: 'Invalid email or password'
      });
    }
  }
}
