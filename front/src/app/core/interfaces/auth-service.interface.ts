import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Session } from "../models/session";

@Injectable({
    providedIn: 'root',
})
export abstract class IAuthService {
    abstract readonly controllerPath: string;

    /**
     * Envía solicitud `POST` con los datos del usuario que se desea dar de alta.
     * Posteriormente se llama a `signIn()` devolviendo la sesión generada.
     * 
     * @param user `User` payload del usuario.
     * @returns un `Session` objeto.
     */
    abstract signUp(user: User): Observable<Session>;

    /**
     * Envía solicitud `POST` con los datos del usuario que se desea loguear en la aplicación.
     * Posteriormente llama a `setSession()` guardando los 
     * datos de sesion en el navegador del usuario.
     * 
     * @param user `User` payload del usuario.
     * @returns un `Session` objeto.
     */
    abstract signIn(user: User): Observable<Session>;
}
