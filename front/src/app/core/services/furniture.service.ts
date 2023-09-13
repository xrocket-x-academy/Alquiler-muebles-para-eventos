import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { BaseService } from '../interfaces/base-service';
import { Furniture } from '../models/furniture';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService implements BaseService<Furniture> {
  
  readonly controllerPath: string = `/furniture`; 

  constructor(private apiService: ApiService) { }

  public create(model: Furniture): Observable<number> {
    return this.apiService.post<number>(this.controllerPath, model).pipe(
      map((reponse) => {
        return reponse;
      })
    );
  }

  public getAll(): Observable<Furniture[]> {
    const requestPath = `${this.controllerPath}/all`;

    return this.apiService.get<Furniture[]>(requestPath).pipe(
      map((response) => {
        return response;
      })
    );
  }

  public getById(id: number): Observable<Furniture> {
    const requestPath = `${this.controllerPath}/${id}`;

    return this.apiService.get<Furniture>(requestPath).pipe(
      map((response) => {
        return response;
      })
    );
  }

  /**
   * Llamada a enpoint que retorna un furniture modificado.
   * 
   * @param furniture - El objeto de tipo Furniture con sus propiedades.
   * @param available - Agrego para el nuevo valor de disponibilidad (true or false)
   * @returns - Observable con la respuesta de tipo Furniture.
   */
  public update(furniture: Furniture): Observable<Furniture> {
    const requestPath = `${this.controllerPath}/${furniture.id}`;

    return this.apiService.put<Furniture>(requestPath, furniture).pipe(
      map((response) => {
        return response;
      })
    );
  }

  public deleteById(id: number): Observable<number> {
    const requestPath = `${this.controllerPath}/${id}`;
    
    return this.apiService.delete<number>(requestPath).pipe(
      map((response) => {
        return response;
      })
    );
  }

  public updateAvailability(furnitureId: number, available: boolean): Observable<Furniture> {
    const requestPath = `${this.controllerPath}/update-availability/${furnitureId}`;
    const requestBody = { available };
  
    return this.apiService.put<Furniture>(requestPath, requestBody).pipe(
      map((response) => {
        return response;
      })
    );
  }
}

