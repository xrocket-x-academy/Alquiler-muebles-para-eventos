import { Injectable } from '@angular/core';
import { ISessionService } from '../interfaces/session-service.interface';
import { Moment } from 'moment';
import { Session } from '../models/session';
import { SessionData } from '../models/session-data';

import * as jwt_decode from 'jwt-decode'
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SessionService implements ISessionService{

  constructor() { }
  
  setToken(session: Session): void {
    sessionStorage.setItem('token', session.token);
  }

  getToken(): Session {
    const session = new Session(sessionStorage.getItem('token'));
    return session;
  }

  logout(): void {
    sessionStorage.removeItem('token');
  }

  getSessionData(session: Session): SessionData {
    if(!session.token) {
      console.error(`error while reading token`);
    }

    const sessionData = jwt_decode.default<SessionData>(session.token);

    return sessionData;
  }

  getExpiration(): Moment {
    throw new Error('Method not implemented.');
  }
  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }
  isLoggedOut(): boolean {
    throw new Error('Method not implemented.');
  }
}
