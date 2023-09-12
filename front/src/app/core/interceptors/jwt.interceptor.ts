import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISessionService } from '../interfaces/session-service.interface';
import { Session } from '../models/session';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  private readonly unfollowedApiEndpoints: Array<string> = [`/api/auth/sign-up`, `/api/auth/sign-in`];

  constructor(private sessionService: ISessionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const session: Session = this.sessionService.getToken();

    const isLoggedIn = session?.token;
    const isFollowedEndpoint = !this.unfollowedApiEndpoints.includes(request.url);

    if(isLoggedIn && isFollowedEndpoint) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${session.token}`}
      });
    }

    return next.handle(request);
  }
}
