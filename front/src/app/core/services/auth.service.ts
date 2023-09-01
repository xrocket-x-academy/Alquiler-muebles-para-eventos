import { Injectable } from '@angular/core';
import { IAuthService } from '../interfaces/auth-service.interface';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';
import { Session } from '../models/session';
import * as moment from 'moment';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  
  controllerPath: string = `/auth`;
  
  constructor(private apiService: ApiService) { }

  signUp(user: User): Observable<Session> {
    return this.apiService.post<Session>(`${this.controllerPath}/sign-up`, user).pipe(
      map((response) => {
        return response;
      })
    );
  }
  
  signIn(user: User): Observable<Session> {
    throw new Error('Method not implemented.');
  }
  
  setSession(session: Session): void {
    throw new Error('Method not implemented.');
  }
  
  logout(): void {
    throw new Error('Method not implemented.');
  }
  
  getExpiration():  moment.Moment { 
    throw new Error('Method not implemented.');
  }
  
  isLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }
  
  isLoggedOut(): boolean {
    throw new Error('Method not implemented.');
  }
}
