import { Injectable } from "@angular/core";
import { Session } from "../models/session";
import { SessionData } from "../models/session-data";

@Injectable({
    providedIn: 'root',
})
export abstract class ISessionService {
    /**
     * Almacena los datos de la `Session` en el sessionStorage del navegador cliente.
     * Nosotros nos encargamos de identificar y advertir que la sesión expiró.
     * 
     * @param session `Session` payload de sesión. 
     */
    abstract setToken(session: Session): void;

    /**
     * Obtiene la `Session` (token) actual
     */
    abstract getToken(): Session;

    /**
     * Blanquea los datos de la `Session` almacenados 
     * en el sessionStorage del navegador cliente.
     */
    abstract logout(): void;
    abstract getSessionData(session: Session): SessionData;
    
    abstract getExpiration():  moment.Moment;
    abstract isLoggedIn(): boolean;
    abstract isLoggedOut(): boolean;
}
