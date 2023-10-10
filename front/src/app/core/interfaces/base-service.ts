import { Observable } from "rxjs";

export interface BaseService<T> {
    readonly controllerPath: string;

    /**
     * Llamada a enpoint que retorna todas las entidades de tipo `T`.
     * 
     * @returns Observable con una lista de entidades de tipo`T`
    */
    getAll(): Observable<T[]>;
    
    /**
     * Llamada a enpoint que retorna un entidad de tipo `T` mediante su identificador
     * 
     * @param { number } id Identificador de la entidad que se desea desea obtener. 
     * @returns Observable con la respuesta de tipo `T`.
    */
    getById(id: number): Observable<T>;
    update(model: T): Observable<T>;

    /**
     *
     * Llamada a endpoint que elimina un valor de tipo `T` mediante su identificador.
     * 
     * @param id Identificador de la entidad que se desea eliminar.
     * @returns Observable con el número de filas modificadas.
     */
    deleteById(id: number): Observable<number>;

    create(model: T): Observable<number>;
}
