import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BaseService } from 'src/app/core/interfaces/base-service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements BaseService<unknown> {

  readonly controllerPath: string = `/user`;

  constructor(private apiService: ApiService) { }

  public create(model: unknown): Observable<number> {
    throw new Error('Method not implemented.');
  }

  public getAll(): Observable<unknown[]> {
    throw new Error('Method not implemented.');
  }
  
  public getById(userId: number): Observable<User> {
    const params = new HttpParams().set('id', userId);
    
    return this.apiService.get<User>(this.controllerPath, params).pipe(
      map((response) => {
        return response
      })
    );
  }
  
  /**
   * Llamada a enpoint que retorna un usuario modificado.
   * 
   * @param user El objeto de tipo User con sus propiedades.
   * @returns Observable con la respuesta de tipo User.
   */
  public update(user: unknown): Observable<unknown> {
    return this.apiService.put<unknown>(this.controllerPath, user).pipe(
      map((response) => {
         return response 
      })
    );
  }

  public deleteById(userId: number): Observable<number> {
    const params = new HttpParams().set('id', userId);

    return this.apiService.delete<number>(this.controllerPath, params).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
