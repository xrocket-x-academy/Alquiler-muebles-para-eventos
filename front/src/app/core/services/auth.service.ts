import { Injectable } from '@angular/core';
import { IAuthService } from '../interfaces/auth-service.interface';
import { Observable, map } from 'rxjs';
import { User } from '../models/user';
import { Session } from '../models/session';
import * as moment from 'moment';
import { ApiService } from '../http/api.service';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  
  controllerPath: string = `/auth`;
  
  constructor(private apiService: ApiService) { }

  signUp(user: User): Observable<Session> {
    return this.apiService.post<ApiResponse<string>>(`${this.controllerPath}/sign-up`, user).pipe(
      map((response: ApiResponse<string>) => {
        const session = new Session(response.data);
        return session;
      })
    );
  }
  
  signIn(user: User): Observable<Session> {
    return this.apiService.post<ApiResponse<string>>(`${this.controllerPath}/sign-in`, user).pipe(
      map((response: ApiResponse<string>) => {
        const session = new Session(response.data);
        return session;
      })
    );
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
