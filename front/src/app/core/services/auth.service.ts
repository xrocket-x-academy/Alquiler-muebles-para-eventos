import { Injectable } from '@angular/core';
import { IAuthService } from '../interfaces/auth-service.interface';
import { Observable, map, BehaviorSubject} from 'rxjs';
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
  private currentUserSubject: BehaviorSubject<User | null>;
  
  constructor(private apiService: ApiService) { 
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
  }

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

  public login(username: string, password: string): Observable<Session> {
    return this.apiService.post<ApiResponse<string>>('/login', { username, password }).pipe(
      
      map((response: ApiResponse<string>) => {
        const user = new User(response.data);
        this.currentUserSubject.next(user); 
        return new Session(response.data);
      })
    );
  }

  public logout(): void {
    
    this.currentUserSubject.next(null); 
  }

  public currentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();

  }

}
